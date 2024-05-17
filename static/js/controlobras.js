const images = document.querySelectorAll('.imagem');
const imageSelect = document.getElementById('imageSelect');

imageSelect.addEventListener('change', function() {
  const selectedIndex = imageSelect.value;
  
  // Esconde todas as imagens
  images.forEach(function(image) {
    image.style.display = 'none';
  });

  // Exibe a imagem selecionada
  images[selectedIndex].style.display = 'block';
});