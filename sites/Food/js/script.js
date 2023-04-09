"use strict";
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import form from './modules/form';
import card from './modules/card';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 60000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', "2021-09-01");
    modal('[data-modal]', '.modal', modalTimerId);
    form('form', modalTimerId);
    card();
    slider({
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        slidesArray: '.offer__slide', 
        wrapper: '.offer__slider-wrapper', 
        slidesContainer: '.offer__slider-inner', 
        indicators: '.carousel-indicators'
    });
    calc();
}); 

