const classes = {
    lesson1: {
      materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã'
    },
    lesson2: {
      materia: 'História',
      numeroEstudantes: 20,
      professor: 'Carlos'
    },
    lesson3: {
      materia: 'Matemática',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite'
    }
  }

//   🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getInfo = (objeto, professores) => {
    const allLessons = Object.keys(objeto);
    const result = {
        materia: [],
        students: 0,
    }

    allLessons.forEach((lesson) =>  {
        if (professores === objeto[lesson].professor) {
            result.materia.push(objeto[lesson].materia),
            result.students += objeto[lesson].numeroEstudantes;
        }
    })

 return result
}

// console.log(getInfo(classes, 'Carlos'))

  const countStudents = (params) => {
      const valores = Object.keys(params);
      let students = 0;

    for (let i = 0; i < valores.length; i += 1) {
            if (params[valores[i]].materia === 'Matemática') {
                students += params[valores[i]].numeroEstudantes
            }
        }
            return students;
  }

//   console.log(countStudents(classes))

//   🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (objeto, professores) => {
const allLessons = Object.keys(objeto);
const report = {}

allLessons.forEach((lesson) => {
if (objeto[lesson].professor === professores) {

    report['professor'] = professores
    report['aulas'] = getInfo(objeto, professores).materia
    report['estudantes'] = getInfo(objeto, professores).students
    }
})
return report
}
// objeto[lesson].materia

console.log(createReport(classes, 'Maria Clara'))