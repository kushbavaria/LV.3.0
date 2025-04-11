import os
import time
import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup

# Selenium imports
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# URL of the team page
url = "https://www.linkventures.com/team"

# Set up Selenium in headless mode
chrome_options = Options()
chrome_options.add_argument("--headless")  # Runs Chrome in headless mode.
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
driver = webdriver.Chrome(ChromeDriverManager().install(), options=chrome_options)

# Open the page and wait for dynamic content to load
driver.get(url)
# Adjust sleep time if the page takes longer to load its content
time.sleep(5)  

# Get the full page source after JavaScript has run
html_content = driver.page_source
driver.quit()

# Parse the page with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# Create output directory
output_folder = "downloaded_team_images"
os.makedirs(output_folder, exist_ok=True)

# Try to find team member containers (adjust the selector as needed)
team_members = soup.find_all("div", class_="team-member")
if team_members:
    print(f"Found {len(team_members)} team member container(s).")
else:
    print("No team member containers found using div.team-member. Falling back to all <img> tags.")
    team_members = soup.find_all("img")

def format_name(name: str) -> str:
    """
    Extract the first and last name and format them as lowercase 'firstname-lastname'.
    If only one name is provided, return that name in lowercase.
    """
    parts = name.split()
    if len(parts) >= 2:
        return f"{parts[0]}-{parts[1]}".lower()
    elif parts:
        return parts[0].lower()
    else:
        return "unknown"

download_count = 0

# Process each team member container or image element
for member in team_members:
    member_name = None
    img_tag = None

    if member.name != "img":
        # Look for a header tag with the team member's name
        header = member.find(["h3", "h2", "h4"])
        if header:
            member_name = header.get_text().strip()
        # Look for the image within the container
        img_tag = member.find("img")
    else:
        img_tag = member
        if img_tag.has_attr("alt"):
            member_name = img_tag["alt"].strip()

    if not member_name:
        print("Skipping an element because no name was found.")
        continue

    formatted_name = format_name(member_name)

    if not img_tag or not img_tag.get("src"):
        print("Skipping element with name", member_name, "because no image source was found.")
        continue

    img_src = img_tag.get("src")
    img_url = urljoin(url, img_src)

    # Determine file extension; default to .jpg if necessary
    ext = os.path.splitext(img_url)[1].split("?")[0]
    if not ext:
        ext = ".jpg"

    filename = f"{formatted_name}{ext}"
    filepath = os.path.join(output_folder, filename)

    try:
        img_response = requests.get(img_url)
        img_response.raise_for_status()
    except requests.RequestException as e:
        print(f"Failed to download {img_url}: {e}")
        continue

    with open(filepath, "wb") as f:
        f.write(img_response.content)
    print(f"Downloaded {img_url} as {filename}")
    download_count += 1

print("Download complete. Images saved in:", os.path.abspath(output_folder))
print(f"Total images downloaded: {download_count}")