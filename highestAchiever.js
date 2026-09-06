let student[]=[
    {name:"Rabia Mehboob", marks: 64,cgpa: 3.98},
    {name:"Laiba Javaid", marks: 79,cgpa: 4.00},
    {name:"Kinza", marks: 60,cgpa: 3.75}
]
console.log(student);

let highest=student[0];
for (let i=0;i<student.length;i++){
    if(student[i].marks>highest.marks)
    {
        highest=student[i];
    }
}
console.log(`highest Achiever\n highest Achiever Name:${highest.name}\n highest Achiever Marks:${highest.marks}`);
