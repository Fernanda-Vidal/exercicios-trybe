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

  console.log(countStudents(classes))