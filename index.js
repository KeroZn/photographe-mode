

    // Initialisation des composants Bootstrap (Optionnel)
    document.addEventListener('DOMContentLoaded', function() {
        var dropdown = new bootstrap.Dropdown(document.querySelector('.dropdown-toggle'));
    });


//------------------------Carousel---------------------------------------//

$(document).ready(function() {
  $('.container-photo').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 400,
    mainClass: 'mfp-fade'
  });

  // Ajout evenement au lien
  $('.nav-link').on('click', function() {
    // suprime class active des lien
    $('.nav-link').removeClass('active');
    // ajout class active sur le lien cliqué
    $(this).addClass('active');
    // recupere le tag active
    const activeTag = $(this).text().toLowerCase().replace(/\s/g, '');
    // filtre les photo avec la class active
    const filteredPhotos = photos.filter(photo => photo.tags.includes(activeTag));
    // supprime les photo de la galerie
    $('.container-photo').html('');
    // crée une nouvelle galerie avec les photo du filtre
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


