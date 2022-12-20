let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let list = document.getElementById("list")
let gender = document.getElementById("gender")
let score = document.getElementById("score")
let arrList = []
let submit = document.getElementById("submit")

function submitbtn(event) {
    event.preventDefault()
    let gen;
        if (gender.value == 1) {
            gen = "Male"
        }else if  (gender.value == 2) {
            gen = "Female"
        }
    let listItem = {firstname: firstname.value, 
                    lastname: lastname.value, 
                    gender: gen, 
                    score: score.value,
                    }
    arrList.push(listItem);
    console.log(arrList);
    reload()
}
submit.addEventListener("click", submitbtn)
function reload(){
    let row =""
    for(i=0; i<arrList.length; i++){
        row += `
        
        <div>
            <div>
                ${arrList[i].firstname}
                ${arrList[i].lastname}
                ${arrList[i].gender}
                <div id="point">
                ${arrList[i].score}
                </div>
            </div>
            <a id="addPoint">Add 5 Point</a>

        </div>`
    }
    list.innerHTML = row 
}
function add5() {
    if (point.innerHTML >= 0) {
        point.innerHTML += 5
    }
}
point = document.getElementById("point")
addPoint = document.getElementById("addPoint")
addPoint.addEventListener("click", add5)