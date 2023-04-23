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


//------------------------Carousel---------------------------------------//

$(document).ready(function() {
  $('.container-photo').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  // Add event listener to navigation links
  $('.categorie-pht').on('click', function() {
    // Remove active class from all links
    $('.categorie-pht').removeClass('active');
    // Add active class to clicked link
    $(this).addClass('active');
    // Get active tag
    const activeTag = $(this).text().toLowerCase().replace(/\s/g, '');
    // Filter photos by active tag
    const filteredPhotos = photos.filter(photo => photo.tags.includes(activeTag));
    // Clear existing gallery
    $('.container-photo').html('');
    // Create new gallery with filtered photos
    for (let i = 0; i < filteredPhotos.length; i++) {
      const { src } = filteredPhotos[i];
      const item = $('<a>').attr('href', src).append($('<img>').attr('src', src));
      $('.container-photo').append(item);
    }
    // Update magnificPopup instance
    $.magnificPopup.instance.updateItemHTML($('.container-photo').html());
  });
});


//---------------------------triage des phtotos----------------------------------//


const navLinks = document.querySelectorAll(".navigation .categorie-pht");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtenez le tag de la photo à afficher en fonction du lien cliqué
    const tag = link.getAttribute("href").slice(1);

    // Masquer toutes les photos
    const photos = document.querySelectorAll(".container-photo img");
    photos.forEach(photo => photo.style.display = "none");

    // Afficher les photos avec le tag correspondant
    const filteredPhotos = document.querySelectorAll(`[data-tags*="${tag}"]`);
    filteredPhotos.forEach(photo => photo.style.display = "block");

  });
});


