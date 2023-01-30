export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((students, value) => students + value.id, 0);
}
