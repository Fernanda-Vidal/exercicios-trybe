import requests
from bs4 import BeautifulSoup
import time


def fetch_html(url: str):
    time.sleep(0.2)
    try:
        res = requests.get(url)
        res.raise_for_status()
    except (requests.exceptions.ConnectTimeout, requests.exceptions.HTTPError):
        return ''

    return res.text


# :: é tipo o innerText
def scrape_quotes_data(html_content: str) -> list[dict]:
    bs_select = BeautifulSoup(html_content, "html.parser")
    result = []
    for quote in bs_select.find_all("div", class_="quote"):
        author = quote.small.text
        content = quote.span.text
        tags = [tag.text for tag in quote.div.find_all("a")]

        quote_data = {"author": author, "content": content, "tags": tags}

        result.append(quote_data)
    return result


def scrape_next_page_path(html_content):
    bs_select = BeautifulSoup(html_content, "html.parser")
    try:
        return bs_select.find("li", class_="next").a["href"]
    except AttributeError:
        return None


def scrape_all_quotes():
    base_url = "http://quotes.toscrape.com"
    next_page_path = '/'
    result = []

    while next_page_path:
        quotes_html = fetch_html(base_url + next_page_path)
        quotes_data = scrape_quotes_data(quotes_html)
        next_page_path = scrape_next_page_path(quotes_html)
        result += quotes_data

    return result
