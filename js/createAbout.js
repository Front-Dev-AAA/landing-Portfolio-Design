export const createClientsAbout = () => {
  const about = document.createElement('section');
  about.classList.add('about');
  about.setAttribute('id', 'about');

  // создаем heroContainer
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('container', 'about__container');
  about.append(aboutContainer);
  // создаем  зоголовок 
  const h1 = document.createElement('h1');
  h1.classList.add('about__header');
  h1.textContent = 'My portfolio';
  aboutContainer.append(h1);

  const aboutLeft = document.createElement('div');
  const aboutRight = document.createElement('div');
  aboutLeft.classList.add('about__left');
  aboutRight.classList.add('about__right');
  aboutContainer.append(aboutLeft, aboutRight);

  const aboutFoto = document.createElement('img');
  aboutFoto.classList.add('about__foto');
  aboutFoto.setAttribute('src', 'image/photo.jpg');
  aboutFoto.setAttribute('alt', 'фото владельца');
  aboutRight.append(aboutFoto);
  // создаем левый блок
  // создаем  зоголовок 
  const aboutDecr = document.createElement('p');
  aboutDecr.classList.add('about__desc');
  aboutDecr.innerHTML = '  Hi  <span class="about__hi">👋</span>, <br> My name is <br>  <span class="about__gradient"> Pavan MG</span> <br>  I&nbsp;build&nbsp;things&nbsp;for web';
  aboutLeft.append(aboutDecr);


  return about;
}