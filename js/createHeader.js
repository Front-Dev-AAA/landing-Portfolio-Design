import {
  github,
  twitter,
  linkedIN
} from "./svg.js";


// функция для социальных сетей
export function socSeti(github, twitter, linkedIN, headerRight, className, classNameSocial) {
  const social = document.createElement('ul');
  social.classList.add(classNameSocial, 'list-reset');
  headerRight.append(social);
  // гитхаб 
  let svgGithab = document.createElement('li');
  svgGithab.classList.add(className);
  social.append(svgGithab);
  const logoGit = document.createElement('a');
  logoGit.classList.add(className);
  logoGit.setAttribute('href', '#');
  logoGit.setAttribute('target', '_blank');
  logoGit.setAttribute('aria-label', 'канал телеграмм');
  svgGithab.append(logoGit);
  logoGit.innerHTML = github;
  // твиттер
  let svgTwit = document.createElement('li');
  svgTwit.classList.add(className);
  social.append(svgTwit);
  const logoTwit = document.createElement('a');
  logoTwit.classList.add(className);
  logoTwit.setAttribute('href', '#');
  logoTwit.setAttribute('target', '_blank');
  logoTwit.setAttribute('aria-label', 'социальная сеть');
  svgTwit.append(logoTwit);
  logoTwit.innerHTML = twitter;
  // linkedIN
  let svgIn = document.createElement('li');
  svgIn.classList.add(className);
  social.append(svgIn);
  const logoIn = document.createElement('a');
  logoIn.classList.add(className);
  logoIn.setAttribute('href', '#');
  logoIn.setAttribute('target', '_blank');
  logoIn.setAttribute('aria-label', 'социальная сеть линкин ай ди');
  svgIn.append(logoIn);
  logoIn.innerHTML = linkedIN;
  return social;
}
// функция навигации
export function menu(headerContainer, menuItem, menuNav) {
  let menuObj = [{
      textContentDescr: "Home",
      href: "#header",
    },
    {
      textContentDescr: "About",
      href: "#about",
    },
    {
      textContentDescr: "Tech Stack",
      href: "#stack",
    },
    {
      textContentDescr: "Projects",
      href: "#works",
    }, {
      textContentDescr: "Contact",
      href: "#contacts",
    }
  ]
  const nav = document.createElement('nav');
  nav.classList.add(menuNav);
  nav.setAttribute('id', 'menu');
  headerContainer.append(nav);

  // создаем  список для  меню навигации
  const listNav = document.createElement('ul');
  listNav.classList.add('menu__list');
  nav.append(listNav);
  // obj - один объект массива
  let index = 0;
  let rezult = [];
  for (const obj of menuObj) {
    // сoздаем элемента списка li
    let li = document.createElement('li');
    li.classList.add(menuItem);
    listNav.append(li);
    if ("href" in obj) {
      let linkMenu = document.createElement('a');
      linkMenu.classList.add('menu__link');
      linkMenu.setAttribute('href', obj['href']);
      linkMenu.textContent = obj['textContentDescr'];
      li.append(linkMenu);
      rezult[index] = linkMenu;
    }
    index++;
  }



  return [nav, listNav, rezult] ;
}

export const createClientsHeader = () => {

  // создаем header
  const header = document.createElement('header');
  header.classList.add('header');
  header.setAttribute('id', 'header');
  // создаем headerContainer
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('container', 'header__container');
  headerContainer.setAttribute('id', 'shell-header');
  header.append(headerContainer);

  // создаем ссылку на лого
  const logo = document.createElement('a');
  logo.classList.add('logo');
  logo.setAttribute('href', '#');
  logo.setAttribute('target', '_blank');
  headerContainer.append(logo);

  // картинка лого
  const logoImg = document.createElement('img');
  logoImg.classList.add('logo__img');
  logoImg.setAttribute('src', 'image/logo.svg');
  logoImg.setAttribute('alt', 'Logotype');
  logoImg.setAttribute('loading', 'lazy');
  logoImg.setAttribute('width', '97');
  logoImg.setAttribute('height', '59');
  logo.setAttribute('width', '97');
  logo.setAttribute('height', '59');
  logo.append(logoImg);
  // создаем кнопку для меню бургер
  const buttonBurger = document.createElement('button');
  buttonBurger.classList.add('header__burger-btn');
  buttonBurger.setAttribute('id', 'burger');
  headerContainer.append(buttonBurger);
  // создаем спаны для меню бургер
  for (let index = 0; index < 3; index++) {
    let i = document.createElement('span');
    buttonBurger.append(i);
  }



  // меню
  const [nav, listNav, rezult] = [...menu(headerContainer, 'menu__item', 'menu')];
  //  социальные сети

  const headerRight = document.createElement('li');
  headerRight.classList.add('headar__right');
  listNav.append(headerRight);

  socSeti(github, twitter, linkedIN, headerRight, 'header__icon', 'header__social');



  //   создаем меню бургер справа
  buttonBurger.addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
  // Закрыть меню при нажатии на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      // Действие при клике
      document.querySelector(".header").classList.remove("open")
    }
  });
  // Закрыть меню при клике вне его
  nav.addEventListener('click', event => {
    event._isClickWithInMenu = true;
  });
  buttonBurger.addEventListener('click', event => {
    event._isClickWithInMenu = true;
  });
  document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    header.classList.remove("open")
  });


  // закрытие меню-бургер при клике на пункте меню
  rezult.forEach(el => {
    el.addEventListener('click', () => {
      header.classList.remove('open');
    });
  });



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


  return header;
}