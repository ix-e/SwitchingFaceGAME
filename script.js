document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault();
//récuperer les réponses des inputs
let in1 = document.getElementById('input1').value.trim();
let in2 = document.getElementById('input2').value.trim();
let in3 = document.getElementById('input3').value.trim();
//vérifier les réponses
const reponseIn1 = (in1.toLowerCase() === 'lloyd');
const reponseIn2 = (in2.toLowerCase() === 'mao');
const reponseIn3 = (in3.toLowerCase() === 'guilford');

if(reponseIn1 && reponseIn2 && reponseIn3){
    document.getElementById('resultMessage').innerHTML = " All Hail BRITANNIA 🫡🫡🫡";
    document.getElementById('resultMessage').style.color = "crimson";
    alert("ALL HAIL BRITANNIA 🫡🫡🫡");
    
}else{
    document.getElementById('resultMessage').innerHTML = 'Aargh 🥶🥶🥶 Réponses incorrectes, TATAKAEEEE.🔥🔥🔥 ';
    document.getElementById('resultMessage').style.color = 'yellow';
}
});