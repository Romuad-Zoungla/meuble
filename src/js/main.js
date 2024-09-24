
function loadHTML(filePath, elementID, callback) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementID).innerHTML = data;
      if (callback) {
        callback(); // Exécuter la fonction callback une fois le contenu chargé
      }
    })
    .catch(error => console.error('Error loading HTML:', error));
}
  
 
  // Charger les pages et initialiser le modal après le chargement
  loadHTML('/pages/HeroSection.html', 'heroSection');
  loadHTML('/pages/PartnerSection.html', 'Partners');
  loadHTML('/pages/GalleryAll.html', 'GalleryAll',initializeGalleryAll);
  loadHTML('/pages/ElevateSpace.html', 'ElevateSpace');
  loadHTML('/pages/ElevateSection.html', 'Elevate');
  loadHTML('/pages/DedicateSection.html', 'dedicate');
  // loadHTML('/pages/gallery.html', 'gallery', initializeGalleryModal); // Le callback `initializeGalleryModal` est appelé après le chargement de la galerie
  loadHTML('/pages/testimonials.html', 'testimonials');
  loadHTML('/pages/footer.html', 'footer');
  



