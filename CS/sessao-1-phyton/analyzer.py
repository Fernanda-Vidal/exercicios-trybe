def text_analyzer(input_text:str):
    '''função que gera dado sobre uma string fornecida'''
    result = {}
    result["original"] = input_text
    result["size"] = len(input_text)
    result["word_counter"] = len(input_text.split())
    result["uppercase"] = input_text.upper()
    result["count_o"] = input_text.count("O") + input_text.count("o")
    result["count_py"] = input_text.count("py")
    result["count_py"] = count_letters(input_text)

    return result
    
def count_letters(input_text):
    result = {}
    for letter in input_text:
        if letter not in result:
            result[letter] = 1
        else:
            result[letter] += 1
    return result

if __name__ == "__main__":
    print(text_analyzer("aula de python está sendo bem legal"))