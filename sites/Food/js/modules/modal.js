function closeModal(selectorModal) {                             //закрыть модальное окно
    const modal = document.querySelector(selectorModal);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "visible";
}

function openModal(selectorModal, modalTimerId) {                              //открыть модальное окно
    const modal = document.querySelector(selectorModal);
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearTimeout(modalTimerId);                     //удаляем таймер для модального окна
}
 
function modal(btnsSelector, selectorModal, modalTimerId) {
    //Modal
    const btnsContact = document.querySelectorAll(btnsSelector),
          modal = document.querySelector(selectorModal);

    btnsContact.forEach(btn => {                        //для всех кнопок устанавливаем обработчик клика
        btn.addEventListener('click', () => openModal(selectorModal, modalTimerId));
    });

    modal.addEventListener("click", (event) => {        //закрываем модальное окно, если кликнули в серую нерабочую 
        if (event.target === modal || event.target.getAttribute('data-close') == "") {                   //область
            closeModal(selectorModal);
        }
    });

    document.addEventListener("keydown", (e) => {       //закрываем модальное окно при нажатии Escape
        if (e.code === "Escape" && modal.classList.contains("show")) {
            console.log("esc");
            closeModal(selectorModal);
        }
    });

    function showModalByScroll() {                      //callback для открытия модального окна в конце сайта
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 ) {
            openModal(selectorModal, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export {closeModal, openModal};