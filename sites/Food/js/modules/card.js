import {getResource} from '../services/services';

function card() {
    //класс для карточек
    
    class Card {
        constructor (src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;                                         //путь к картинке
            this.alt = alt;                                         //описание картинки
            this.title = title;                                     //Заголовок
            this.descr = descr;                                     //Описание
            this.price = price;                                     //Цена
            this.classes = classes;                                 //сss классы, которые в будущем могут быть добавлены
            this.parent = document.querySelector(parentSelector);   //Род. элемент, куда будем вставлять карточку 
            this.transfer = 27;                                     //тек.курс к доллару
            this.changeToUAH();
        }

        changeToUAH() {                                 //метод-конвертор валют
            this.price = this.price * this.transfer;
        }

        render() {                                          //создание карточки на странице
            const element = document.createElement('div');  //создание элемента на странице

            if (this.classes.length === 0) {
                element.classList.add('menu__item');
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `                           
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;                                    //html верстка

            this.parent.append(element);                    //добавление эелемнта на страницу
        }
    }

    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new Card(img, altimg, title, descr, price, '.menu__field .container').render();
        });
    });
}

export default card;