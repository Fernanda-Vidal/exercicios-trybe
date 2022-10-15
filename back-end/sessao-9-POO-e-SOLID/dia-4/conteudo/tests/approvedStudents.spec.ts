import 'mocha';
import { expect } from "chai";
import { approvedStudents } from "../src/SOLID";

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testando a função "approvedStudents"', function () {
  const APPROVAL_GRADE = 0.7;
    describe('quando todas as notas são maiores que 0.7', function () {
      it('retorna "true"', function () {
        const disciplines = [
          { name: disciplinesDict.mathematics, grade: 0.8 },
          { name: disciplinesDict.history, grade: 0.9 },
        ];
        const school = {
          name: "Scholl",
          approvalGrade: APPROVAL_GRADE,
        };
        const result = approvedStudents({ name: 'Student', disciplines, school });
  
        expect(result).to.be.equal(true);
      });
    });

    describe('quando todas as notas são menores que 0.7', function () {
        it('retorna "false"', function () {
          const disciplines = [
            { name: disciplinesDict.mathematics, grade: 0.1 },
            { name: disciplinesDict.history, grade: 0.2 },
          ];
          const school = {
            name: "Scholl",
            approvalGrade: APPROVAL_GRADE,
          };
          const result = approvedStudents({ name: 'Student', disciplines, school });
    
          expect(result).to.be.equal(false);
        });
      });

      describe('quando todas as notas são menores que 0.7', function () {
        it('retorna "false"', function () {
          const disciplines = [
            { name: disciplinesDict.mathematics, grade: 0.1 },
            { name: disciplinesDict.history, grade: 0.2 },
          ];
          const school = {
            name: "Scholl",
            approvalGrade: APPROVAL_GRADE,
          };
          const result = approvedStudents({ name: 'Student', disciplines, school });
    
          expect(result).to.be.equal(false);
        });
      });
    })