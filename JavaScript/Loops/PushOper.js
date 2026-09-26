let fruits=[];
function onClickBtn(){
    debugger;
    let valueOfFruits = document.getElementById("inpName").value;
    fruits.push(valueOfFruits);
    for(let i=0;i<fruits.length;i++){
        if(fruits.length){
                console.log("Fruits are added");
        }
    }
    document.getElementById("inpName").value = " ";
    console.log(fruits);
}