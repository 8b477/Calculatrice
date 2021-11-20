const touches = [...document.querySelectorAll('button')];
const listKeyCode = touches.map(touche => touche.dataset.key);
const screen = document.querySelector('#ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
})


document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listKeyCode.includes(valeur)){
        console.log(listKeyCode)
        switch (valeur){
            case '8':
                screen.textContent = "";
                break;
            case'13':
                const calcul = eval(ecran.textContent);
                screen.innerHTML = calcul;
                break;
            default:
                const indexKeycode = listKeyCode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}
window.addEventListener('error',(e) =>{
    alert('Erreur de calcul : ' + e.message);
})