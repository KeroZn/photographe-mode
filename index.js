const btn = document.querySelector('.btn');
const accueilSection = document.getElementById('accueil');
const accueilswitchSection = document.getElementById('accueil-switch');

btn.addEventListener('click', () => {
  // Ajouter la classe "transition" aux éléments que vous voulez animer
  accueilSection.classList.add('transition');
  accueilswitchSection.classList.add('transition');
  
  // Modifier les styles des éléments
  accueilSection.style.opacity = 0;
  accueilswitchSection.style.opacity = 0;
  accueilswitchSection.removeAttribute('hidden');
  setTimeout(() => {
    accueilSection.style.display = 'none';
    accueilswitchSection.style.opacity = 1;
  }, 900);
  
  // Supprimer la classe "transition" après un délai de 0,5 seconde pour que la transition ait lieu
  setTimeout(() => {
    accueilSection.classList.remove('transition');
    accueilswitchSection.classList.remove('transition');
  }, 1900);
});
