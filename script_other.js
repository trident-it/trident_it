let mask = document.querySelector('.mask');

window.addEventListener('load', () =>{
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});

let popup = document.getElementById('mypopup'),
popupOpen = document.getElementById('Btn'),
popupClose = document.querySelector('.close');

popupOpen.onclick = function() {
    popup.style.display='block';
    }
    
popupClose.onclick = function() {
    popup.style.display='none';
    }
    

window.onclick = function(e) {
    if(e.target == popup) {
        popup.style.display='none';
        }
    }

