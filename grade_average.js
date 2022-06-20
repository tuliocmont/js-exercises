const marks = [100, 100, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const avg = calculateAverage(marks);
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
