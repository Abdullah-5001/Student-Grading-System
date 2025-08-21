
function calculateGrade(marks)
{
  if(marks >=90 && marks <=100)
  {
    return ' Grade A';
  }
  else if(marks >=75)
  {
    return ` Grade B`;
  }
  else if (marks >=60)
  {
    return ` Grade C`;
  }
  else {
    return 'Grade F';
  }
}

for(let i=1;i<=3;i++)
{
 let name = prompt(`Enter the name of student`);
 let marks=Number(prompt("Enter the obtained marks (out of 100)"));
 if (isNaN(marks) || marks < 0 || marks >100)
 {
  console.log(`Enter the marks between 0 and 100`);
 }
 else{
 let obtmarks =calculateGrade(marks);
 console.log(`${name} has obtained ${obtmarks}`);
 }
}
 