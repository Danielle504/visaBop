# Adam Fernandes
# Swamphacks 2020

import requests
import webbrowser
from bs4 import BeautifulSoup
import json
from geopy.geocoders import Nominatim

def validateRadius(s):
  s = s.strip()
  for i in range(len(s)):
      if not s[i].isnumeric():
          return -1
  return int(s)

def parse():
    # Ultimate output
    data = []

    print("Enter a visa type.")
    visa = input().strip("visa").strip()
    print("Enter a city.")
    city = input().strip()
    print("Enter a radius.")
    radius = int(input())

    url = "https://www.indeed.com/jobs?q=%s+visa&l=%s&radius=%d" % (visa, city, radius)

    website = requests.get(url)

    try:
        website.raise_for_status()
    except:
        print("There was a problem with accessing the Indeed job search website.")
        exit(1)

    soup = BeautifulSoup(website.content, "html.parser")

    postings = soup.select("table[role='main']")
    postings = soup.find_all(attrs={'data-tn-element': 'jobTitle'})
    companies = soup.select("table[role='main']")
    companies = soup.find_all(attrs={'class': 'sjcl'})
    companies = soup.find_all(attrs={'class': 'company'})

    if len(postings) == 0:
        print("No jobs available.")
        exit(1)

    jobs = []
    comps = []
    urls = []
    for i in range(len(postings)):
        jobs.append(postings[i].text.strip())
        comps.append(companies[i].text.strip())
        urls.append(url + postings[i]['href'])

    for i,j,u in zip(jobs, comps, urls):
        data.append({"job": i, "company": j, "url": u})

    print(data)
    # end of parse()

parse()