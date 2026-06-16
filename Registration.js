let info1 =[];

function together(){
    let user1value = document.getElementById("stu").value;
    let user2value = document.getElementById("name").value;
    let user3value = document.getElementById("Course").value;

    let student1 = {
        studentId: user1value,
        studentName: user2value,
        courseName: user3value
    };

    info1.push(student1);

   let output = "";

for (let i = 0; i < info1.length; i++) {

    output += "<h1>Student " + (i + 1) + "</h1>";
    output += "<li>ID: " + info1[i].studentId + "</li>";
    output += "<li>Name: " + info1[i].studentName + "</li>";
    output += "<li>Course: " + info1[i].courseName + "</li>";
    output += "<hr>";

}

document.getElementById("ul").innerHTML = output;
}

function Cleardata(){
    document.getElementById("stu").value="";
    document.getElementById("name").value="";
    document.getElementById("Course").value="";

    document.getElementById("ul").innerHTML="";
}