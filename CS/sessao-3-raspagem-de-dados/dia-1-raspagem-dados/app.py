from fastapi import FastAPI, Query
from quotes_scraper import scrape_all_quotes

app = FastAPI()

all_quotes = scrape_all_quotes()
# [
#     {
#         "author": "Belchior",
#         "content": "Amar e mudar as coisas me interessa mais",
#         "tags": ["amor", "mudança"],
#     },
#     {
#         "author": "Elis Regina",
#         "content": (
#             "É, só tinha de ser com você, havia de ser pra você. "
#             "Senão era mais uma dor, senão não"
#         ),
#         "tags": ["ser", "dor"],
#     }
# ]


@app.get("/")
def get_all_quotes():
    return all_quotes


@app.get("/search")
def search_quotes(search_term: str = Query(max_length=100)):
    return [
        quote
        for quote in all_quotes
        if search_term.lower() in quote["content"].lower()
    ]
