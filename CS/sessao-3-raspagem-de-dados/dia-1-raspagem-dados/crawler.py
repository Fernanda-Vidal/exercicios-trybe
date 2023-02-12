import requests
from parsel import Selector
import time

for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test")
    print(response.status_code)
    time.sleep(6)

# Timeout

try:
    response2 = requests.get("http://httpbin.org/delay/5", timeout=2)
# except requests.Timeout: OU
except requests.ReadTimeout:
    response2 = requests.get("http://httpbin.org/delay/5", timeout=8)
finally:
    print(response2.status_code)

response3 = requests.get("http://books.toscrape.com/")
selector = Selector(text=response3.text)

print('só o primeiro', selector.css("img.thumbnail").get())

print(selector.css("div.image_container a").getall())

thumb_url_selector = "div.image_container a::attr(href)"

for url in selector.css(thumb_url_selector).getall():
    thumbnail_request = requests.get("http://books.toscrape.com/" + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css("div.product_main h1")
    print(book_title.get())
