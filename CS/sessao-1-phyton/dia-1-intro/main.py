from fastapi import FastAPI, Query
from analyzer import text_analyzer

app = FastAPI()

@app.get("/")
def get_text_info(input_text: str = Query(default="", max_length=1000)):
    # return { "text": input_text}
    return text_analyzer(input_text)