!function(){"use strict";function e(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow="visible"}function t(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",clearTimeout(t)}window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>t(".modal",o)),6e4);(function(e,t,o,n){const s=document.querySelectorAll(e),c=document.querySelectorAll(t);function r(){c.forEach((e=>{e.classList.add("hide"),e.classList.remove("show")})),s.forEach((e=>{e.classList.remove(n)}))}function a(e=0){c[e].classList.add("show"),c[e].classList.remove("hide"),s[e].classList.add(n)}document.querySelector(o).addEventListener("click",(t=>{const o=t.target;o&&o.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{o==e&&(r(),a(t))}))})),r(),a()})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e,t){function o(e){return e<10?`0${e}`:e}!function(e,t){const n=document.querySelector(e),s=n.querySelector("#days"),c=n.querySelector("#hours"),r=n.querySelector("#minutes"),a=n.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(t);s.textContent=o(e.days),c.textContent=o(e.hours),r.textContent=o(e.minutes),a.textContent=o(e.seconds),e.total<0&&(clearInterval(i),s.textContent="00",c.textContent="00",r.textContent="00",a.textContent="00")}l()}(e,t)}(".timer","2021-09-01"),function(o,n,s){const c=document.querySelectorAll(o),r=document.querySelector(n);c.forEach((e=>{e.addEventListener("click",(()=>t(n,s)))})),r.addEventListener("click",(t=>{t.target!==r&&""!=t.target.getAttribute("data-close")||e(n)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&r.classList.contains("show")&&(console.log("esc"),e(n))})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(n,s),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",o),function(o,n){const s=document.querySelectorAll(o),c="Спасибо, мы с вами свяжемся";function r(o){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),t(".modal",n);const c=document.createElement("div");c.classList.add("modal__dialog"),c.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${o}</div>\n            </div>\n        `,document.querySelector(".modal").append(c),setTimeout((()=>{c.remove(),s.classList.add("show"),s.classList.remove("hide"),e(".modal")}),4e3)}s.forEach((e=>{!function(e){e.addEventListener("submit",(t=>{t.preventDefault();const o=document.createElement("img");o.src="img/forms/spinner.svg",o.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",o);const n=new FormData(e);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),r(c),o.textContent=c,o.remove()})).catch((()=>{r("Что-то пошло не так :(")})).finally((()=>{e.reset()}))}))}(e)})),fetch("http://localhost:3000/menu").then((e=>e.json())).then((e=>console.log(e)))}("form",o),function(){class e{constructor(e,t,o,n,s,c,...r){this.src=e,this.alt=t,this.title=o,this.descr=n,this.price=s,this.classes=r,this.parent=document.querySelector(c),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?e.classList.add("menu__item"):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`                           \n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>`,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:o,title:n,descr:s,price:c})=>{new e(t,o,n,s,c,".menu__field .container").render()}))}))}(),function({slidesArray:e,nextArrow:t,prevArrow:o,totalCounter:n,currentCounter:s,wrapper:c,slidesContainer:r,indicators:a}){const i=document.querySelector(o),l=document.querySelector(t),d=document.querySelector(s),u=document.querySelector(n),m=document.querySelectorAll(e),h=document.querySelector(c),f=document.querySelector(r),g=document.querySelector(a),v=window.getComputedStyle(h).width;let _=0,y=0,p=+v.replace(/\D/g,"");f.style.width=100*m.length+"%",f.style.display="flex",f.style.transition="0.5s all",m.forEach((e=>{e.style.width=v})),h.style.overflow="hidden",u.textContent=E(m.length),l.addEventListener("click",(()=>{y==p*(m.length-1)?(y=0,_=0):(y+=p,_+=1),S(_)})),i.addEventListener("click",(()=>{0==y?(y=p*(m.length-1),_=m.length-1):(y-=p,_-=1),S(_)})),h.style.position="relative";for(let e=0;e<m.length;e++){const e=document.createElement("div");e.classList.add("dot"),g.append(e)}const w=document.querySelectorAll(".dot");function S(e){L(e),_=e,y=e*p,f.style.transform=`translateX(${-y}px)`,d.textContent=E(e+1)}function L(e=0){w.forEach((e=>{e.style.opacity=".5"})),w[e].style.opacity="1"}function E(e){return e>=10?`${e}`:`0${e}`}L(),w.forEach(((e,t)=>{e.addEventListener("click",(()=>{L(t),S(t)}))}))}({nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",currentCounter:"#current",totalCounter:"#total",slidesArray:".offer__slide",wrapper:".offer__slider-wrapper",slidesContainer:".offer__slider-inner",indicators:".carousel-indicators"}),function(){const e=document.querySelector(".calculating__result span");let t,o,n,s,c;function r(e,t){document.querySelectorAll(`${e} div`).forEach((e=>{e.classList.remove(t),localStorage.getItem("ratio")===e.getAttribute("data-ratio")&&e.classList.add(t),localStorage.getItem("sex")===e.getAttribute("id")&&e.classList.add(t)}))}function a(){e.textContent=t&&o&&n&&s&&c?"female"===t?Math.round((447.6+9.2*n+3.1*o-4.3*s)*c):Math.round((88.36+13.4*n+4.8*o-5.7*s)*c):"____"}function i(e,o){const n=document.querySelectorAll(`${e} div`);n.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(c=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",c)):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t)),n.forEach((e=>{e.classList.remove(o)})),e.target.classList.add(o),a()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":n=+t.value;break;case"age":s=+t.value}a()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?c=localStorage.getItem("ratio"):(c="1.375",localStorage.setItem("ratio","1.375")),r("#gender","calculating__choose-item_active"),r(".calculating__choose_big","calculating__choose-item_active"),a(),i("#gender","calculating__choose-item_active"),i(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}()}))}();
//# sourceMappingURL=bundle.js.map