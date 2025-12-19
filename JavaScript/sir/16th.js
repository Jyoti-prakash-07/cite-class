// let sec= document.getElementById("sec");
// let isid= sec.hasAttribute("style");
// console.log('isid:', isid);

// let sec_style= sec.getAttribute("style");
// console.log('sec_style:', sec_style);
// sec.setAttribute("style","color:white");
// setinterval(() => {
//     sec.removeAttribute("");
// }, 10);
let timerId = setTimeout(print, 1500);

function handleClick() {
    clearTimeout(timerId);
}

function print() {
    console.log("hello jyoti");
}
