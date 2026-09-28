import { getHomeTemplate, getFormTemplate } from './templates.js';

export function navegarPara(rota) {
    const appDiv = document.getElementById('app');

    if (rota === 'home') {
        appDiv.innerHTML = getHomeTemplate();
    } else if (rota === 'form') {
        appDiv.innerHTML = getFormTemplate();
    }
}