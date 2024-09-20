import {
  gitWork,
  prev
} from "./svg.js";



export const createClientsWorks = () => {
  const works = document.createElement('section');
  works.classList.add('works');
  works.setAttribute('id', 'works');

  // создаем heroContainer
  const worksContainer = document.createElement('div');
  worksContainer.classList.add('container', 'works__container');
  works.append(worksContainer);
  // создаем зоголовок секции
  const h2 = document.createElement('h2');
  h2.classList.add('work__header');
  h2.textContent = 'Projects';
  worksContainer.append(h2);
  // описание секции
  const p = document.createElement('p');
  p.classList.add('work__decr');
  p.textContent = 'Things I’ve built so far';
  worksContainer.append(p);


  // создаем список
  let arrObj = [{
      src: '/image/1.jpg',
      textContentTitle: "Project Tile goes here",
      textStack: "Tech stack : <span> HTML , JavaScript, SASS, React</span>",
      textContentDescr: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      href: "#",
    },
    {
      src: '/image/2.jpg',
      textContentTitle: "Project Tile goes here",
      textStack: "Tech stack : <span> HTML , JavaScript, SASS, React</span>",
      textContentDescr: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      href: "#",
    }, {
      src: '/image/3.jpg',
      textContentTitle: "Project Tile goes here",
      textStack: "Tech stack : <span> HTML , JavaScript, SASS, React</span>",
      textContentDescr: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      href: "#",
    },
    {
      src: '/image/4.jpg',
      textContentTitle: "Project Tile goes here",
      textStack: "Tech stack : <span> HTML , JavaScript, SASS, React</span>",
      textContentDescr: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      href: "#",
    },
    {
      src: '/image/5.jpg',
      textContentTitle: "Project Tile goes here",
      textStack: "Tech stack : <span> HTML , JavaScript, SASS, React</span>",
      textContentDescr: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      href: "#",
    }, {
      src: '/image/6.jpg',
      textContentTitle: "Project Tile goes here",
      textStack: "Tech stack : <span> HTML , JavaScript, SASS, React</span>",
      textContentDescr: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      href: "#",
    }
  ]



  function createList(Container, Arr) {
    let listWork = document.createElement('ul');
    listWork.classList.add('work__variants', 'list-reset');
    Container.append(listWork);
    let index = 0;
    let rezult = [];

    // obj - один объект массива
    for (const obj of Arr) {
      // сoздаем элемента списка li
      let li = document.createElement('li');
      li.classList.add('work__item');
      listWork.append(li);
      // сoздаем картинку для карточки
      let linkImg = document.createElement('img');
      linkImg.classList.add('work__img');
      linkImg.setAttribute('loading', 'lazy');
      linkImg.setAttribute('alt', 'карточка');
      // obj - вытаскиваем поле из объекта
      linkImg.setAttribute('src', obj['src']);
      // сoздаем обертку для нижней части карточки
      let workBottom = document.createElement('div');
      workBottom.classList.add('work__bottom');
      li.append(linkImg, workBottom);
      // сoздаем описание заголовка карточки
      let workTitle = document.createElement('h3');
      workTitle.classList.add('work__desc-title');
      workTitle.textContent = obj['textContentTitle'];
      workBottom.append(workTitle);
      // сoздаем описание карточки
      let workDesc = document.createElement('p');
      workDesc.classList.add('work__desc');
      workDesc.textContent = obj['textContentDescr'];
      workBottom.append(workDesc);
      // сoздаем описание технологий
      let workStack = document.createElement('p');
      workStack.classList.add('work__stack');
      workStack.innerHTML = obj['textStack'];
      workBottom.append(workStack);

      // сoздаем ссылки

      let sislkiWork = document.createElement('ul');
      sislkiWork.classList.add('work__social', 'list-reset');
      workBottom.append(sislkiWork);
      
      // вид на сайте
      let svgPrev = document.createElement('li');
      svgPrev.classList.add('work__list');
      sislkiWork.append(svgPrev);
      const logoPrev = document.createElement('a');
      logoPrev.classList.add('work__icon');
      logoPrev.setAttribute('href', '#');
      logoPrev.setAttribute('target', '_blank');
      logoPrev.setAttribute('aria-label', 'гит хаб');
      svgPrev.append(logoPrev);
      logoPrev.innerHTML = prev;

      const prevDecsr = document.createElement('a');
      prevDecsr.classList.add('work__social');
      prevDecsr.classList.add('work__social');
      prevDecsr.setAttribute('href', '#');
      prevDecsr.setAttribute('target', '_blank');
      prevDecsr.textContent = 'Live Preview';
      svgPrev.append(prevDecsr);

      // гитхаб
      let svgGithab = document.createElement('li');
      svgGithab.classList.add('work__list');
      sislkiWork.append(svgGithab);
      const logoGit = document.createElement('a');
      logoGit.classList.add('work__icon');
      logoGit.setAttribute('href', '#');
      logoGit.setAttribute('target', '_blank');
      logoGit.setAttribute('aria-label', 'гит хаб');
      svgGithab.append(logoGit);
      logoGit.innerHTML = gitWork;

      const gitDecsr = document.createElement('a');
      gitDecsr.classList.add('work__social');
      gitDecsr.setAttribute('href', '#');
      gitDecsr.setAttribute('target', '_blank');
      gitDecsr.setAttribute('aria-label', 'гит хаб');

      gitDecsr.textContent = 'View Code';
      svgGithab.append(gitDecsr);

      rezult[index] = li;
      index++;
    }
    return rezult;
  }
   createList(worksContainer, arrObj);

  return works;
}