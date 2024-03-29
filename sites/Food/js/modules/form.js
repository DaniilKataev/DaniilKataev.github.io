import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function form(formSelector, modalTimerId) {
    //FORMS

    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: "img/forms/spinner.svg",
        success: "Спасибо, мы с вами свяжемся",
        failure: "Что-то пошло не так :("
    };

    forms.forEach(form => {
        bindPostData(form);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json).
            then(data => {
                console.log(data);
                showModalThanks(message.success);
                statusMessage.textContent = message.success;
                statusMessage.remove();
            }).catch(() => {
                showModalThanks(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showModalThanks(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const modalThanks = document.createElement('div');
        modalThanks.classList.add('modal__dialog');
        modalThanks.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(modalThanks);
        setTimeout(() => {
            modalThanks.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(result => console.log(result));
}

export default form;