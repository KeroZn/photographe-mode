const btn = document.querySelector('.btn');
const accueilSection = document.getElementById('accueil');
const accueilswitchSection = document.getElementById('accueil-switch');

btn.addEventListener('click', () => {
    accueilSection.hidden = true;
    accueilswitchSection.hidden = false;
});

