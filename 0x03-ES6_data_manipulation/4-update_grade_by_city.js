export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => (student.city === city))
    .map((student) => {
      const grade = newGrades.filter((grade) => grade.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}
