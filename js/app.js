// Config
const configuration = {
  top_text: 'behold',
  bottom_text: 'true gloriousness.',
  color: '#FF3333',
  text_color: '#fff',
  blur_amount: 5
};

const moon = new Moon({
  el: "#app",
  data: configuration
});

$(document).ready(function() {
  let movementStrength = 25;
  let height = movementStrength / $(window).height();
  let width = movementStrength / $(window).width();
  $('.background-image').css('filter', `blur(${moon.$data.blur_amount}px)`)
  $(document).mousemove(function(e){
    let pageX = e.pageX - ($(window).width() / 2);
    let pageY = e.pageY - ($(window).height() / 2);
    let newvalueX = width * pageX * -1;
    let newvalueY = height * pageY * -1;
    let translateBackground = `translate(${newvalueX}px, ${newvalueY}px)`;
    $('.background-image').css('transform', translateBackground)
    var translateForeground = `translate(${newvalueX * 4}px, ${newvalueY * 4}px)`;
    $('.foreground svg').css('transform', translateForeground)
  });
});