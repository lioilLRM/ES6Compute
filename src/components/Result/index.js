import tpl from './index.tpl'
import './index.scss'
export default class ResultCompoent{
  constructor() {
    this.name = 'ResultCompoent'
  }
  tpl() {
    const oDiv = document.createElement('div')
    oDiv.innerHTML = tpl()
    return oDiv
  }
}