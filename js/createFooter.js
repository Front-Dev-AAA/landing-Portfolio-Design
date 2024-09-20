import {
    menu
} from "./createHeader.js";



export const createClientsFooter = () => {

    // создаем foter
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    // создаем foter
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('container', 'footer__container');
    footerContainer.setAttribute('id', 'footer');
    footer.append(footerContainer);

    // меню
    const [nav, listNav, rezult] = [...menu(footerContainer, 'menuFooter__item', 'menu__footer')];

    // плавное перемещение меню
    // задаю массив для перебора ссылок
    let anchors = rezult;
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: ('center')
            })
        })
    }


    // создаем foter - правая часть
    const footerRight = document.createElement('div');
    footerRight.classList.add('footer__right');
    footerContainer.append(footerRight);

    const footerRightDescr = document.createElement('p');
    footerRightDescr.classList.add('footer__decr');
    footerRightDescr.innerHTML = 'Designed and built by <span> Pavan MG</span> with <span> Love</span> & <span> Coffee </span>';
    footerRight.append(footerRightDescr);


    return footer;
}