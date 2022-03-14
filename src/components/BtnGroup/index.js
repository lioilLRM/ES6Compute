import tpl from './index.tpl';
import './index.scss'
export default class BtnGroupComponent {
  constructor() {
    this.name = 'BtnGroupComponent';
  }

  tpl() {
    let oDiv = document.createElement('div');
    oDiv.className = 'btnGroup'
    console.log(`tpl：`,tpl);
    
    oDiv.innerHTML = tpl()
    return oDiv;
  }

}