const student = {
    name: 'salam uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 82,
        physics: 89,
        chemistry: 75
    }
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject]
// console.log(chemistry);
console.log(subjectMarks);