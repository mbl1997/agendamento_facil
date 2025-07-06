// Iniciar o carrossel com fade e intervalo personalizado
$('#carouselAgendamento').carousel({
  interval: 4000, // tempo entre slides em ms
  ride: 'carousel',
  pause: false // não pausa ao passar mouse
});

// Se estiver usando AOS (scroll animation), inicializar
AOS.init({
  duration: 1000, // duração da animação em ms
  once: true,     // anima apenas uma vez ao entrar na tela
});

// Animação suave ao clicar em links âncora (opcional)
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  const target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800);
});

// Placeholder para futuras interações nos cards
$('.card').hover(
  function() {
    $(this).addClass('shadow-lg').css('transform', 'translateY(-5px)');
  },
  function() {
    $(this).removeClass('shadow-lg').css('transform', 'translateY(0)');
  }
);
