import tpl from './index.tpl';

export default class InputGroupComponent {
  constructor() {
    this.name = 'InputGroupComponent';
  }

  tpl() {
    let oDiv = document.createElement('div');
    oDiv.className = 'inputGroup'
    oDiv.innerHTML = tpl()
    return oDiv;
  }

}