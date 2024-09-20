import {
    createClientsHeader
} from "./createHeader.js";

import {
    createClientsMain
} from "./createMain.js";

import {
    createClientsFooter
} from "./createFooter.js";

const createApp = () => {
    const header = createClientsHeader();
    const mainModule = createClientsMain();
    const footer = createClientsFooter();
    const bodyWraper = document.getElementById('bodyWraper');
    bodyWraper.append(header, mainModule, footer);
}
createApp();


