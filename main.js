var students_name=[]

function submit(){
var display=[]
for (let index = 1; index<= 4;index++) {
  var students=document.getElementById("student"+index).value
    students_name.push(students)
    
}
for (let index = 0; index < students_name.length; index++) {
    display.push("<h4>NAME - "+ students_name[index] + "</h4>")
    
}
document.getElementById("results").innerHTML=display
var removecomas=students_name.join(" ")
document.getElementById("removecomas").innerHTML=removecomas
}
function sort(){
    students_name.sort()
    document.getElementById("results").innerHTML=students_name
}
