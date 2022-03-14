import {digitalization, trimSpace} from '../utils/tools'
import {newCompute} from '../utils/compute.js'
import adornCompute from '../lib/adornCompute';
import InputGroupComponent from '../components/InputGroup/index.js';
import BtnGroupComponent from '../components/BtnGroup/index.js';
import ResultCompoent from '../components/Result/index.js';
// 使用装饰器实现工具类的继承
@adornCompute
class Caculator{
  constructor(el) {
    this.name = 'Caculator';
    this.el = el;
    // this.oInput = el.getElementsByTagName('input')
    // this.oBtnGroup = el.getElementsByClassName('btnGroup')[0]
    // this.oResult = el.getElementsByClassName('result')[0]
    this.InputGroupComponent = new InputGroupComponent()
    this.BtnGroupComponent = new BtnGroupComponent()
    this.ResultCompoent = new ResultCompoent()

    // this._data = {
    //   method: 'plus',
    //   fValue: '',
    //   sValue: ''
    // }

    this._data = this.defineData()

    this.selectedBtnIndex = 0
  }

  defineData() {
    let _obj = {},
      method = 'plus',
      fValue = 0,
      sValue = 0;
    const that = this;
    Object.defineProperties(_obj, {
      method: {
        get() {
          return method;
        },
        set(nval) {
          method = nval;
          that.setResult(that._data.method, that._data.fValue, that._data.sValue)
        }
      },
      fValue: {
        get() {
          return fValue;
        },
        set(nval) {
          fValue = nval;
          that.setResult(that._data.method, that._data.fValue, that._data.sValue)
        }
      },
      sValue: {
        get() {
          return sValue;
        },
        set(nval) {
          sValue = nval;
          that.setResult(that._data.method, that._data.fValue, that._data.sValue)
        }
      }
    })
      return _obj
  }

  init() {
    this.render()
    this.bindEvent()
  }

  render() {
    const oFrag = document.createDocumentFragment()
    oFrag.appendChild(this.InputGroupComponent.tpl())
    oFrag.appendChild(this.BtnGroupComponent.tpl())
    oFrag.appendChild(this.ResultCompoent.tpl())

    this.el.appendChild(oFrag)
  }

  bindEvent() {
   // bind() 方法会创建一个新的函数实例
    // 不适用bind 改变 this.onClickBtn 的this 指向的话，this的默认指向的是点击的对象，而不是当前当前类实例
    const el = this.el
    this.oInput = el.getElementsByTagName('input')
    this.oBtnGroup = el.getElementsByClassName('btnGroup')[0]
    this.oResult = el.getElementsByClassName('result')[0]
    this.oBtns = el.getElementsByClassName('btn')
    this.oInput[0].addEventListener('input', this.onInput.bind(this),false)
    this.oInput[1].addEventListener('input', this.onInput.bind(this),false)
    this.oBtnGroup.addEventListener('click',this.onClickBtn.bind(this), false)
  }

  onInput(event) {
    const tar = event.target,
      id =tar.getAttribute('data-id'),
      val = digitalization(trimSpace(tar.value));
      console.log(`id：`,id, val);
      switch(id) {
        case 'fInput': 
          this._data.fValue = val;
        break;
        case 'sInput':
          this._data.sValue = val;
        break;
        
      }
  }

  onClickBtn(event) {
    console.log(`event：`,event, this);
    const tar = event.target
    const method = tar.getAttribute('data-method')
    const targetName = tar.tagName.toLowerCase()
    // const fValue = digitalization(trimSpace(this.oInput[0].value))
    // const sValue = digitalization(trimSpace(this.oInput[1].value))
    // console.log(`targetName, fValue, sValue：`,targetName,method, fValue, sValue);
    if(targetName === 'button') {
      // let res = compute()[method](fValue, sValue)
      // 使用工具类实现计算
      // let res = newCompute[method](fValue, sValue)
      // 使用继承的方式实现计算
      // let res = this[method](fValue, sValue)
      // console.log(res);
      this._data.method = method;
      this.setSelectedBtn(tar)
      this.setResult(this._data.method, this._data.fValue, this._data.sValue)
    }
  } 

  setSelectedBtn(target) {
    this.oBtns[this.selectedBtnIndex].className = 'btn'
    console.log(`this.Obtns, target：`,this.oBtns, target);
    
    this.selectedBtnIndex = [].indexOf.call(this.oBtns, target)
    this.oBtns[this.selectedBtnIndex].className += ' selected'
  }

  setResult(method, fValue, sValue) {
    this.oResult.innerHTML = this[method](fValue, sValue)
  }

}

export default Caculator