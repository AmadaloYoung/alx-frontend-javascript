export default function getStudentsByLocation(ArrayOfObjects, city) {
  return ArrayOfObjects.filter((item) => item.location === city);
}
