export default function getListStudentIds(ArrayOfObject) {
  if (Array.isArray(ArrayOfObject)) { return ArrayOfObject.map((item) => item.id); }
  return [];
}
