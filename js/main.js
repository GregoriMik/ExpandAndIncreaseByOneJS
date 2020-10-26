// const btn = document.querySelectorAll("button")[0]; pierwszy znaleziony

// const liitems = document.querySelectorAll("li"); NodeList należało by się odwoływać do każdego elementu tablicy
// const liitems = document.querySelector("ul"); 
const btn = document.querySelector("button");

const liItems = document.querySelectorAll('li');

let fontSize = 9;

//Pętla

// btn.addEventListener("click", () => {
//     console.log("działa");
//     fontSize++;
//     for (let i = 0; i < liItems.length; i++) {
    // (wył)liitems.style.display = "block";
    // liItems[i].style.display = "block";
    // liItems[i].style.fontSize = `${fontSize}px`;
    // (wył)fontSize++; każdy byłby większy należy to zrobić przed iteracją wtedy wszystkie są równe
//     }
// })

//FOREACH
 
btn.addEventListener("click",()=>{
    // fontSize++;
    // zwiększa jeszcze przed pierwszym wywołaniem, dlatego jest w zmiennej fontSize wartość 9
    liItems.forEach((liItems)=>{
        liItems.style.display = "block";
        liItems.style.fontSize = fontSize + "px";
    })
    fontSize++;
})