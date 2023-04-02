// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));
  console.log(array);
  // ⭐️ splice()는 배열읇 변형시키고, slice()는 새로운 배열을 만들어서 반환함.
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. ⭐️ find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result.name);
}

// Q6. make an array of enrolled students
{
  console.log(students.filter(student => student.enrolled));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  console.log(students.map(student => student.score));

}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.some(student => student.score < 50));
}

// Q9. compute students' average score
{
  // 내가 작성한 답안
  let sum = 0;
  for(e of students) {
    sum += e.score;
  }
  console.log(sum / students.length);

  // 드림코딩 답안 (reduce())
  const result = students.reduce((prev,curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let sorts = students.sort((student1,student2) => {
    if(student1.score > student2.score) return 1;
    if(student1.score < student2.score) return -1;
    return 0;
  });
  console.log(sorts.map(students => students.score).join());
}