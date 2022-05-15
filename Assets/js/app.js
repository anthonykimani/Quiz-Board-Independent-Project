const answerChoice1 = document.querySelector('.one');
const answerChoice2 = document.querySelector('.two');
const answerChoice3 = document.querySelector('.three');
const answerChoice4 = document.querySelector('.four');
const answerChoice5 = document.querySelector('.five');
const answerChoice6 = document.querySelector('.six');
const answerChoice7 = document.querySelector('.seven');
const answerChoice8 = document.querySelector('.eight');
const answerChoice9 = document.querySelector('.nine');
const answerChoice10 = document.querySelector('.ten');
const answerChoice11 = document.querySelector('.eleven');
const answerChoice12 = document.querySelector('.twelve');

const radioChoice1 = document.querySelector('.radio-one');
const radioChoice2 = document.querySelector('.radio-two');
const radioChoice3 = document.querySelector('.radio-three');
const radioChoice4 = document.querySelector('.radio-four');
const radioChoice5 = document.querySelector('.radio-five');
const radioChoice6 = document.querySelector('.radio-six');
const radioChoice7 = document.querySelector('.radio-seven');
const radioChoice8 = document.querySelector('.radio-eight');
const radioChoice9 = document.querySelector('.radio-nine');
const radioChoice10 = document.querySelector('.radio-ten');
const radioChoice11 = document.querySelector('.radio-eleven');
const radioChoice12 = document.querySelector('.radio-twelve');

let correct = 0;

answerChoice1.addEventListener('click', ()=>{
    radioChoice1.checked = true;
    answerChoice1.style.backgroundColor = "#d3e2fa";
    radioChoice2.checked = false;
    answerChoice2.style.backgroundColor = "#fff";
    radioChoice3.checked = false;
    answerChoice3.style.backgroundColor = "#fff";
    radioChoice4.checked = false;
    answerChoice4.style.backgroundColor = "#fff";
    correct++;
    console.log(correct);
    totalScore.innerText = correct*20;
});
answerChoice2.addEventListener('click', ()=>{
    radioChoice1.checked = false;
    answerChoice1.style.backgroundColor = "#fff";
    radioChoice2.checked = true;
    answerChoice2.style.backgroundColor = "#d3e2fa";
    radioChoice3.checked = false;
    answerChoice3.style.backgroundColor = "#fff";
    radioChoice4.checked = false;
    answerChoice4.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice3.addEventListener('click', ()=>{
    radioChoice1.checked = false;
    answerChoice1.style.backgroundColor = "#fff";
    radioChoice2.checked = false;
    answerChoice2.style.backgroundColor = "#fff";
    radioChoice3.checked = true;
    answerChoice3.style.backgroundColor = "#d3e2fa";
    radioChoice4.checked = false;
    answerChoice4.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice4.addEventListener('click', ()=>{
    radioChoice1.checked = false;
    answerChoice1.style.backgroundColor = "#fff";
    radioChoice2.checked = false;
    answerChoice2.style.backgroundColor = "#fff";
    radioChoice3.checked = false;
    answerChoice3.style.backgroundColor = "#fff";
    radioChoice4.checked = true;
    answerChoice4.style.backgroundColor = "#d3e2fa";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice5.addEventListener('click', ()=>{
    radioChoice5.checked = true;
    answerChoice5.style.backgroundColor = "#d3e2fa";
    radioChoice6.checked = false;
    answerChoice6.style.backgroundColor = "#fff";
    radioChoice7.checked = false;
    answerChoice7.style.backgroundColor = "#fff";
    radioChoice8.checked = false;
    answerChoice8.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice6.addEventListener('click', ()=>{
    radioChoice5.checked = false;
    answerChoice5.style.backgroundColor = "#fff";
    radioChoice6.checked = true;
    answerChoice6.style.backgroundColor = "#d3e2fa";
    radioChoice7.checked = false;
    answerChoice7.style.backgroundColor = "#fff";
    radioChoice8.checked = false;
    answerChoice8.style.backgroundColor = "#fff";
    correct+=2;
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice7.addEventListener('click', ()=>{
    radioChoice5.checked = false;
    answerChoice5.style.backgroundColor = "#fff";
    radioChoice6.checked = false;
    answerChoice6.style.backgroundColor = "#fff";
    radioChoice7.checked = true;
    answerChoice7.style.backgroundColor = "#d3e2fa";
    radioChoice8.checked = false;
    answerChoice8.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice8.addEventListener('click', ()=>{
    radioChoice5.checked = false;
    answerChoice5.style.backgroundColor = "#fff";
    radioChoice6.checked = false;
    answerChoice6.style.backgroundColor = "#fff";
    radioChoice7.checked = false;
    answerChoice7.style.backgroundColor = "#fff";
    radioChoice8.checked = true;
    answerChoice8.style.backgroundColor = "#d3e2fa";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice9.addEventListener('click', ()=>{
    radioChoice9.checked = true;
    answerChoice9.style.backgroundColor = "#d3e2fa";
    radioChoice10.checked = false;
    answerChoice10.style.backgroundColor = "#fff";
    radioChoice11.checked = false;
    answerChoice11.style.backgroundColor = "#fff";
    radioChoice12.checked = false;
    answerChoice12.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice10.addEventListener('click', ()=>{
    radioChoice9.checked = false;
    answerChoice9.style.backgroundColor = "#fff";
    radioChoice10.checked = true;
    answerChoice10.style.backgroundColor = "#d3e2fa";
    radioChoice11.checked = false;
    answerChoice11.style.backgroundColor = "#fff";
    radioChoice12.checked = false;
    answerChoice12.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice11.addEventListener('click', ()=>{
    radioChoice9.checked = false;
    answerChoice9.style.backgroundColor = "#fff";
    radioChoice10.checked = false;
    answerChoice10.style.backgroundColor = "#fff";
    radioChoice11.checked = true;
    answerChoice11.style.backgroundColor = "#d3e2fa";
    radioChoice12.checked = false;
    answerChoice12.style.backgroundColor = "#fff";
    console.log(correct);
    totalScore.innerText = correct*20;
});

answerChoice12.addEventListener('click', ()=>{
    radioChoice9.checked = false;
    answerChoice9.style.backgroundColor = "#fff";
    radioChoice10.checked = false;
    answerChoice10.style.backgroundColor = "#fff";
    radioChoice11.checked = false;
    answerChoice11.style.backgroundColor = "#fff";
    radioChoice12.checked = true;
    answerChoice12.style.backgroundColor = "#d3e2fa";
    correct+=2;
    console.log(correct);
    totalScore.innerText = correct*20;
});