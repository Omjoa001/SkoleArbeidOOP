import { pool } from './mysql_pool';

class StudentService {
  getStudents(success) {
    pool.query('SELECT * FROM Studenter', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getStudent(id, success) {
    pool.query('SELECT * FROM Studenter WHERE id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  updateStudent(student, success) {
    pool.query(
      'UPDATE Studenter SET name=?, email=?, StudieID=? WHERE id=?',
      [student.name, student.email, student.StudieID, student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  deleteStudent(student, success) {
    pool.query(
      'DELETE FROM Studenter WHERE id=?',
      [student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
}

//legger til følgende for studie visning
class StudieService {
  getStudier(success) {
    pool.query('SELECT * FROM Studie', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getStudie(id, success) {
    pool.query('SELECT * FROM Studie WHERE id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  updateStudie(studie, success) {
    pool.query(
      'UPDATE Studie SET navn=?, kode=? WHERE id=?',
      [studie.navn, studie.kode, studie.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  deleteStudie(studie, success) {
    pool.query(
      'DELETE FROM Studie WHERE id=?',
      [studie.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
}
export let studentService = new StudentService();
export let studieService = new StudieService();
