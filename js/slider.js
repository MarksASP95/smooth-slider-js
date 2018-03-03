var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover la ultima imagen al primer lugar
$('#c-slider section:last').insertBefore('#c-slider section:first');

//mostrar la primera imagen con un margin de -100%
slider.css("margin-left","-"+100+"%");

function moverD(){
  slider.animate({marginLeft: "-"+200+"%"}, 700, function(){
    $('#c-slider section:first').insertAfter('#c-slider section:last');
    slider.css("margin-left","-"+100+"%");
  });
};

function moverI(){
  slider.animate({marginLeft: 0}, 700, function(){
    $('#c-slider section:last').insertBefore('#c-slider section:first');
    slider.css("margin-left","-"+100+"%");
  });
}

siguiente.on("click", moverD);
anterior.on("click", moverI);

setInterval(moverD, 2000);