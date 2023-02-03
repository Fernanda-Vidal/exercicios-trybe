lista = (1, 2, 3)
iter(lista)
# <tuple_iterator object at 0x7fe1e8fe7cd0>
other = ["a", "b", "c"]
iter(other)
# <tuple_iterator object at 0x7fe1e9028a00>
obj_iter = iter(lista)
next(obj_iter)
# 1
next(obj_iter)
# 2
next(obj_iter)
# 3
next(obj_iter)
# StopIteration
# >>>
# KeyboardInterrupt
# >>>

