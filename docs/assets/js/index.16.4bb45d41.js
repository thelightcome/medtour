document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".doctor .doctor__btn"),t=document.querySelector(".modal"),o=document.querySelector(".modal__overlay"),d=document.querySelector(".modal .modal__close");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.add("active"),document.body.style.overflow="hidden"}))})),d.addEventListener("click",(()=>{t.classList.remove("active"),document.body.style.overflow="unset"})),o.addEventListener("click",(e=>{e.target.closest(".modal__content")||t.classList.remove("active")})),o.addEventListener("wheel",(e=>{e.stopPropagation()}))}));
//# sourceMappingURL=index.16.4bb45d41.js.map