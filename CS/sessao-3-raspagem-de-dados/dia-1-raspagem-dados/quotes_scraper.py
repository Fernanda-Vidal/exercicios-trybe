import requests
from parsel import Selector
import time


def fetch_html(url: str):
    time.sleep(0.5)
    try:
        res = requests.get(url)
        res.raise_for_status()
    except (requests.exceptions.ConnectTimeout, requests.exceptions.HTTPError):
        return ''

    return res.text


# :: é tipo o innerText
def scrape_quotes_data(html_content: str) -> list[dict]:
    select = Selector(html_content)
    result = []
    for quote in select.css("div.col-md-8 > div.quote"):
        author = quote.css("small.author ::text").get()
        content = quote.css("span.text ::text").get()
        tags = quote.css("div > a.tag ::text").getall()

        quote_data = {"author": author, "content": content, "tags": tags}

        result.append(quote_data)
    return result


def scrape_next_page_path(html_content):
    select = Selector(html_content)
    return select.css("li.next > a ::attr(href)").get()


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
