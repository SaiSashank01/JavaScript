function onClickbtnSubs() {
    let subject = [];
    let grades = [];
    let result="pass";

    let telMarks = Number(document.getElementById("telNum").value);
    let hinMarks = Number(document.getElementById("HinNum").value);
    let engMarks = Number(document.getElementById("EngNum").value);
    let mathMarks = Number(document.getElementById("mathNum").value);
    let sciMarks = Number(document.getElementById("sciNum").value);
    let socMarks = Number(document.getElementById("socNum").value);
    subject.push(telMarks, hinMarks, engMarks, mathMarks, sciMarks, socMarks);
    console.log(subject)
    for (i = 0; i < subject.length; i++) {

        if (subject[i] >= 90) {
            grades.push("0")
        }
        else if (subject[i] >= 80 && subject[i] < 90) {
            grades.push("A")
        }
        else if (subject[i] >= 70 && subject[i] < 80) {
            grades.push("B")
        }
        else if (subject[i] >= 60 && subject[i] < 70) {
            grades.push("C")
        }
        else if (subject[i] >= 50 && subject[i] < 60) {
            grades.push("D")
        }
        else if (subject[i] >= 40 && subject[i] < 50) {
            grades.push("E")
        }
        else {
            grades.push("F")
        }
        if (subject[i] <= 40) {
            result="Fail";
        }
        
    }

    document.getElementById("telugugrades").innerHTML = grades[0]
    document.getElementById("hindigrades").innerHTML = grades[1]
    document.getElementById("englishgrades").innerHTML = grades[2]
    document.getElementById("mathgrades").innerHTML = grades[3]
    document.getElementById("scincegrades").innerHTML = grades[4]
    document.getElementById("socialgrades").innerHTML = grades[5]

   document.getElementById("finalresult").innerHTML=result
}