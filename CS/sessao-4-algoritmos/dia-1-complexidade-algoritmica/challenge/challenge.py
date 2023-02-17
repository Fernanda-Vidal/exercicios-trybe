"""
Dada uma
- coleção [lista] ORDENADA [crescente] de inteiros e
- um numero alvo [int].
- Retorne True se há um par de números (indices diferentes) cuja soma resulta 
    no alvo.
- Retorne False caso contrário.
"""

# def check_sum(numbers: list, target: int): # N = len(numbers)
# # Complexidade do algoritmo: O(N²)

#     # executa N * O(N) = O(N²)
#     for fst_i, fst_num in enumerate(numbers):
#         # executa N * O(1) = O(N)
#         for snd_i, snd_num in enumerate(numbers): # executa N vezes
#             # constante = O(1)
#             if (fst_i != snd_i) and (
#                 fst_num + snd_num == target
#             ):
#                 return True
#     return False


def check_sum(numbers: list, target: int):
    # Complexidade do algoritmo: O(N)
    left_i = 0
    right_i = len(numbers)-1

    # Executa no máximo N * O(1) = O(N)
    while left_i != right_i:
        # constante = O(1)
        if numbers[left_i] + numbers[right_i] == target:
            return True
        elif numbers[left_i] + numbers[right_i] < target:
            left_i += 1
        else:
            right_i -= 1
    return False

def test_check_sum():
    assert check_sum([2, 2, 2, 2, 2, 2, 2], 5) is False
    assert check_sum([-1, 1, 1, 2, 3, 4, 78, 90], 7) is True
    assert check_sum([1, 2, 5, 8, 13, 21], 3) is True
    assert check_sum([1, 2, 5, 8, 13, 21, 21], 22) is True
    assert check_sum([4, 3], 8) is False
    assert check_sum([1, 1, 2, 4, 4], 7) is False
    assert check_sum([1, 2, 3, 4], 9) is False
    assert check_sum([1, 20, 300, 4000], 0) is False