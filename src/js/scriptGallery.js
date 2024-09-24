
  
  // Initialisation des événements pour le modal après le chargement du contenu
  function initializeGalleryModal() {
    const images = document.querySelectorAll('.modal-trigger');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    let currentIndex = 0;
    const imgArray = Array.from(images);
  
    // Ouvrir le modal et afficher l'image sélectionnée
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modalImg.src = img.src;
        currentIndex = index; // Mettre à jour l'index actuel
      });
    });
  
    // Fermer le modal
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    // Slider des images avec 'Previous' et 'Next' qui sont invisible
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? imgArray.length - 1 : currentIndex - 1;
      modalImg.src = imgArray[currentIndex].src;
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === imgArray.length - 1) ? 0 : currentIndex + 1;
      modalImg.src = imgArray[currentIndex].src;
    });
  
    // Fermer le modal si on clique en dehors de l'image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  
    // Slider automatique toutes les 3 secondes
    let autoSlide = setInterval(() => {
      currentIndex = (currentIndex === imgArray.length - 1) ? 0 : currentIndex + 1;
      modalImg.src = imgArray[currentIndex].src;
    }, 3000);
  
    // Arrêter le slider automatique quand on ferme le modal
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      clearInterval(autoSlide);
    });
  }
 

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 400,
      spaceBetween: 10,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  
  