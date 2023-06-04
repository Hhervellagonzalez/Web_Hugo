window.addEventListener('scroll', function() {
    var barra = document.querySelector('.barra');
    var barra2 = document.querySelector('.barra2');
  
    if (window.pageYOffset > barra.offsetTop) {
      barra2.classList.add('sticky');
    } else {
      barra2.classList.remove('sticky');
    }
  });


function App() {}

    window.onload = function(event){
        var app = new App();
        window.app = app;

    }

    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carruselList = event.currenttarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track')
        const carrusel = track.querySelectorAll('.carrusel');

        const carruselWidth = carrusel[0].offsetWidth;

        const trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;
        
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.styIe.left.slice(0, -2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition,trackWidth, listWidth, carruselWidth, track);
        
    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0){

            track.style.left = `${-1 *(leftPosition - carruselWidth)}px`;
        }    
    }

    let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        if (leftPosition < (trackWidth - listWidth)){
            
            track.style.left = `${-1 *(leftPosition + carruselWidth)}px`;
        }    
    }


