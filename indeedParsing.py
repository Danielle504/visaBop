import requests
import webbrowser
from bs4 import BeautifulSoup
import json

print("Enter a visa type.")
visa = input().strip("visa").strip()

print("Enter a city.")
city = input().strip()

url = "https://www.indeed.com/jobs?q=%s+visa&l=%s&radius=20" % (visa, city)
print(url)

website = requests.get(url)
# webbrowser.open(url)

try:
    website.raise_for_status()
except:
    print("There was a problem.")

soup = BeautifulSoup(website.content, "html.parser")

postings = soup.select("table[role='main']")
postings = soup.find_all(attrs={'data-tn-element': 'jobTitle'})
if len(postings) == 0:
    print("No jobs available.")
    exit(1)

jsonData = []
r = requests.get('https://enw1lkm7isvfp.x.pipedream.net')
for posting in postings:
    jsonData.append(posting.attrs)

r = requests.post('https://enw1lkm7isvfp.x.pipedream.net/post', {"postings": jsonData})