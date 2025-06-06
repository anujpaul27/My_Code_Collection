// Greading System with js 

let marks = 61;
let grade = "";

if (marks <100 && marks>=80)
{
    grade = 'A+';
}
else if (marks <80 && marks >= 70)
{
    grade = 'A';
}
else if (marks < 70 && marks >= 60)
{
    grade = 'A-';
}
else if (marks < 60 && marks >= 50)
{
    grade = 'B';
}
else if (marks < 50 && marks >= 40)
{
    grade = 'C';
}
else if (marks < 40 && marks >= 33)
{
    grade = 'D';
}
else
{
    grade = 'F';
}

console.log(grade)

