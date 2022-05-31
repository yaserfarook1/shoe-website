



$.alert("okok");

document.querySelector(".cartbtn").addEventListener("click",getVal());
function getVal() {
const val = document.querySelector("#quantity"). value;
alert("The total number of quantity is " +val);
}


const list = document.querySelector('.allshoe'),
items = Array.from(list.querySelectorAll('.shoesort'));

console.log(items.sort((a, b) => a - b));


items.forEach(el => list.append(el))
