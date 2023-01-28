# with open("arquivo3.txt", "w") as file:
#     file.write("Marcos 10\n")
#     file.write("Felipe 4\n")
#     file.write("José 6\n")
#     file.write("Ana 10\n")
#     file.write("Maria 9\n")
#     file.write("Miguel 5\n")
# print(file.closed)

studentes_disapproved = []
try:
    file = open("arquivo3.txt", "r")
except OSError:
    print("arquivo inexistente")
else:
    for students in file:
        grade = students
        grade = students.split(" ")
        
        if int(grade[1]) < 6:
            studentes_disapproved.append(students + "\n")
    with open("disapproved.txt", mode="w") as disapproved:
        print(studentes_disapproved)
        disapproved.writelines(studentes_disapproved)
finally:
    print("Tentativa criar um novo arquivo com os estudantes reprovados")


    