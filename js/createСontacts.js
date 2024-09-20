import {
  socSeti
} from "./createHeader.js";


import {
  github,
  twitter,
  linkedIN
} from "./svg.js";

export const createClientsСontacts = () => {
  const contacts = document.createElement('section');
  contacts.classList.add('contacts');
  contacts.setAttribute('id', 'contacts');

  // создаем Container
  const contactsContainer = document.createElement('div');
  contactsContainer.classList.add('container', 'contacts__container');
  contacts.append(contactsContainer);
  // создаем зоголовок сайта
  const h2 = document.createElement('h2');
  h2.classList.add('contacts__header');
  h2.textContent = 'Contacts';
  contacts.append(h2);




  // создаем ссылку на лого
  const logo = document.createElement('a');
  logo.classList.add('contact__logo');
  logo.setAttribute('href', '#');
  logo.setAttribute('target', '_blank');
  contactsContainer.append(logo);
  // картинка лого
  const logoImg = document.createElement('img');
  logoImg.classList.add('logo__img');
  logoImg.setAttribute('src', 'image/logo-contact.svg');
  logoImg.setAttribute('alt', 'Logotype');
  logoImg.setAttribute('loading', 'lazy');
  logoImg.setAttribute('width', '97');
  logoImg.setAttribute('height', '59');
  logo.setAttribute('width', '97');
  logo.setAttribute('height', '59');
  logo.append(logoImg);

  const contactRight = document.createElement('div');
  contactRight.classList.add('contacts__right');
  contactsContainer.append(contactRight);
  // телефон
  const telefon = document.createElement('a');
  telefon.classList.add('contacts__tel');
  telefon.setAttribute('href', '#');
  telefon.setAttribute('target', '_blank');
  telefon.textContent = '+91 12345 09876';
  contactRight.append(telefon);
  // e-mail
  const mail = document.createElement('a');
  mail.classList.add('contacts__mail');
  mail.setAttribute('href', '#');
  mail.setAttribute('target', '_blank');
  mail.textContent = 'info@example.com';
  contactRight.append(mail);

  socSeti(github, twitter, linkedIN, contactRight, 'contacts__icon', 'contacts__social');


  const razdel = document.createElement('hr');
  razdel.classList.add('contacts__razdel');
  razdel.setAttribute('width', '100%');
  razdel.setAttribute('size', '2');
  contactsContainer.append(razdel);




  // <hr width="100%" size="2" color="blue" noshade>



 


  return contacts;
}