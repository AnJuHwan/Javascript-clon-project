'use strick';
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings')

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

// local에 input.value 받아서 저장
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

// text value 받아오기
function handleSubmit(event){
    // event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 폼을 나타냄
function askForName() { 
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
}

// 입력되면 form 없애주고 greeting을 input.value값을 나타냄 
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
    
}

// local에서 currentUser의 값을 받아옴
function loadName() { 
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        // user not
        askForName(); //유저가 없으면 form을 나타냄
    }else { 
        // user in
        paintGreeting(currentUser); // 유저가 있으면 form을 없애주고 input.value값을 나타냄
    }
}

function init(){
    loadName();
}

init();