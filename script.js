let mask = document.querySelector('.mask');

window.addEventListener('load', () =>{
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});

let popup = document.getElementById('mypopup'),
popupToggle = document.getElementById('btn'),
popupOpen = document.getElementById('Btn'),
banerOpen = document.getElementById('baner'),
clean = document.getElementById('form'),
popupClose = document.querySelector('.close');

popupToggle.onclick = function() {
    popup.style.display='block';
    }

popupOpen.onclick = function() {
    popup.style.display='block';
    }
    
popupClose.onclick = function() {
    popup.style.display='none';
    banerOpen.style.display='none';
    clean.reset();
    }
    

window.onclick = function(e) {
    if(e.target == popup) {
        popup.style.display='none';
        banerOpen.style.display='none';
        clean.reset();
        }
    }

