

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


// card
const topicsData = {
  "voyage-topics-container": [
      { title: "Voyage en Europe", content: "J'ai récemment visité plusieurs pays en Europe..." },
      { title: "Aventure en Asie", content: "Découverte de la culture asiatique et des paysages magnifiques..." },
      // Ajoutez d'autres sujets ici
  ],
  "photo-tips-container": [
      { title: "Capturez le coucher de soleil", content: "Voici quelques astuces pour capturer des photos étonnantes lors du coucher de soleil..." },
      { title: "Utilisez la lumière naturelle", content: "Améliorez vos photos en utilisant la lumière naturelle disponible..." },
      // Ajoutez d'autres astuces ici
  ],
  "voyage-advice-container": [
      { title: "Emportez des articles essentiels", content: "Faites une liste des articles indispensables à emporter lors de vos voyages..." },
      { title: "Planifiez à l'avance", content: "La planification à l'avance peut vous aider à maximiser votre expérience de voyage..." },
      // Ajoutez d'autres conseils ici
  ],
};

// Fonction pour créer une carte de sujet
function createTopicCard(topic) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h2>${topic.title}</h2><p>${topic.content}</p>`;
  card.addEventListener("click", () => {
      // Redirigez l'utilisateur vers la page du sujet complet ou effectuez toute autre action souhaitée
      alert(`Ouvrir le sujet : ${topic.title}`);
  });

  return card;
}

// Fonction pour afficher les sujets dans une section spécifique
function displayTopics(containerId) {
  const topicsContainer = document.getElementById(containerId);

  console.log(`Affichage des sujets dans la section ${containerId}`);

  // Vérifiez si le conteneur a été trouvé dans le document
  if (!topicsContainer) {
      console.error(`Le conteneur avec l'ID ${containerId} n'a pas été trouvé.`);
      return;
  }

  // Supprimez les enfants existants pour éviter la duplication
  while (topicsContainer.firstChild) {
      topicsContainer.removeChild(topicsContainer.firstChild);
  }

  // Récupérez les données spécifiques à cette section
  const data = topicsData[containerId] || [];

  // Créez une carte pour chaque sujet et ajoutez-la à la section
  data.forEach((topic) => {
      const card = createTopicCard(topic);
      topicsContainer.appendChild(card);
  });

  console.log(`Sujets affichés dans la section ${containerId}`);
}

// Appeler la fonction pour afficher les sujets lors du chargement de la page
window.onload = function () {
  displayTopics("voyage-topics-container");
  displayTopics("photo-tips-container");
  displayTopics("voyage-advice-container");
};