export const createClientsHero = () => {
  const hero = document.createElement('section');
  hero.setAttribute('id', 'stack');
  hero.classList.add('hero');
  // создаем heroContainer
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('container', 'hero__container');
  hero.append(heroContainer);

 


  // создаем заголовок навыки
  const h2 = document.createElement('h2');
  h2.classList.add('hero__title');
  h2.textContent = 'My Tech Stack';
  heroContainer.append(h2);
  // создаем просто блок
  const p = document.createElement('p');
  p.textContent = ' Technologies I’ve been working with recently';
  p.classList.add('hero__decr');
  heroContainer.append(p);
  // создаем список навыков
  const labelIcon = ['/image/skills_1.png',
    '/image/skills_2.png',
    '/image/skills_3.png',
    '/image/skills_4.png',
    '/image/skills_5.png',
    '/image/skills_6.png',
    '/image/skills_7.png',
    '/image/skills_8.png',
    '/image/skills_9.png',
    '/image/skills_10.png',
    '/image/skills_11.png',
    '/image/skills_12.png',
  ]

  // функция для списка навыков
  function createList(arr) {
    const listSkills = document.createElement('ul');
    listSkills.classList.add('list__skills', 'list-reset');
    heroContainer.append(listSkills);
    let Skills = [];
    for (let index = 0; index < arr.length; index++) {
      Skills[index] = document.createElement('li');
      Skills[index].classList.add('hero__item-icon');
      listSkills.append(Skills[index]);
      let Icon = document.createElement('img');
      Icon.setAttribute('alt', 'icon');
      Icon.classList.add('hero__icon');
      Icon.setAttribute('src', arr[index]);
      Skills[index].append(Icon);

    }
  }
  createList(labelIcon);
  return hero;
}