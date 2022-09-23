let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.querySelector("#generate-btn");
let passOne = document.querySelector("#Password-one");
let passTwo= document.querySelector("#Password-two");


let passLength = 14;

generateBtn.addEventListener("click", function(){
    passOne.textContent = generatePassOne()
    passTwo.textContent = generatePassTwo()
})

function generatePassOne(){
    let passOne = ""
    for(let i= 0; i <= passLength; i++){
        let randomPassOne = Math.floor(Math.random() * characters.length)
        passOne += characters[randomPassOne]
    };
    return passOne
}

function generatePassTwo(){
    let passTwo = ""
    for(let i= 0; i <= passLength; i++){
        let randomPassTwo = Math.floor(Math.random() * characters.length)
        passTwo += characters[randomPassTwo]
    };
    return passTwo
};

const copyBtnOne = document.querySelector("#copy-one");
const copyBtnTwo = document.querySelector("#copy-two")

copyBtnOne.addEventListener("click", function(){
    textOne = passOne.textContent;
    navigator.clipboard.writeText(textOne);
})

copyBtnTwo.addEventListener("click", function(){
    textTwo = passTwo.textContent;
    navigator.clipboard.writeText(textTwo);
})
