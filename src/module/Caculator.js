import {digitalization, trimSpace} from '../utils/tools'
import {newCompute} from '../utils/compute.js'
import adornCompute from '../lib/adornCompute';

// 使用装饰器实现工具类的继承
@adornCompute
class Caculator{
  constructor(el) {
    this.name = 'Caculator';
    this.el = el;
    this.oInput = el.getElementsByTagName('input')
    this.oBtnGroup = el.getElementsByClassName('btnGroup')[0]
    this.oResult = el.getElementsByClassName('result')[0]
  }

  init() {
    this.bindEvent()
  }

  bindEvent() {
   // bind() 方法会创建一个新的函数实例
    // 不适用bind 改变 this.onClickBtn 的this 指向的话，this的默认指向的是点击的对象，而不是当前当前类实例
    this.oBtnGroup.addEventListener('click',this.onClickBtn.bind(this), false)
  }

  onClickBtn(event) {
    console.log(`event：`,event, this);
    const tar = event.target
    const method = tar.getAttribute('data-method')
    const targetName = tar.tagName.toLowerCase()
    const fValue = digitalization(trimSpace(this.oInput[0].value))
    const sValue = digitalization(trimSpace(this.oInput[1].value))
    console.log(`targetName, fValue, sValue：`,targetName,method, fValue, sValue);
    if(targetName === 'button') {
      // let res = compute()[method](fValue, sValue)
      // 使用工具类实现计算
      // let res = newCompute[method](fValue, sValue)
      // 使用继承的方式实现计算
      let res = this[method](fValue, sValue)
      console.log(res);
      this.renderResult(res)
    }
  } 
  renderResult(value) {
    this.oResult.innerHTML = value
  }

}

export default Caculator