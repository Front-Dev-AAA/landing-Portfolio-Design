import {
  createClientsHero
} from "./createHero.js";

import {
  createClientsAbout
} from "./createAbout.js";

import {
  createClientsWorks
} from "./createWorks.js";

import {
  createClientsСontacts
} from "./createСontacts.js";



export const createClientsMain = () => {
  const mainModule = document.createElement('main');
  const hero = createClientsHero();
  const about = createClientsAbout();
  const works = createClientsWorks();
  const contacts = createClientsСontacts();
  mainModule.append(about, hero, works, contacts);

  return mainModule;
}