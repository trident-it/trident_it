"use strich"

document.addEventListener('DOMContentLoaded', function () { 
    const form = document.getElementById('form');
    popup = document.getElementById('mypopup');
    banerOpen = document.getElementById('baner');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'Post',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                popup.style.display='none';
                banerOpen.style.display='block';
                form.reset();
            }else{
                popup.style.display='none';
                alert('Помилка')
            }
        }else{
            alert("Заповніть обов'язкові поля");
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')


        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emeilTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.value === ''){
                formAddError(input);
                error++;
            }

        } 
        return error
    }

    function formAddError(input) {
        input.classList.add('_error');
    }
    
    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function emeilTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});