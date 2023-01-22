def text_analyzer(input_text:str):
    '''função que gera dado sobre uma string fornecida'''
    result = {}
    result["original"] = input_text
    result["size"] = len(input_text)

    return result
    

if __name__ == "__main__":
    print(text_analyzer("aula de python está sendo bem legal"))