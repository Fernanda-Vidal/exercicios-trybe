import requests


def scrape_all_quotes():
    return requests.get("http://quotes.toscrape.com/")

# parei no 22:50