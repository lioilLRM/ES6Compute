console.log('首页测试')
import {compute, newCompute} from '../utils/compute.js'
import {digitalization, trimSpace} from '../utils/tools'
;(function(doc){
  const oDiv = doc.getElementsByClassName('Jcaculator')[0],
    fInput = doc.getElementsByTagName('input')[0],
    sInput = doc.getElementsByTagName('input')[1],
    btnGroup = doc.getElementsByClassName('btnGroup')[0];
  console.log(`oDiv：`,oDiv, fInput.value, sInput.value);

  const init= function() {
    bindEvent()
  }

  function bindEvent() {
    btnGroup.addEventListener('click', onBtnClick, false)
  }
  
  function onBtnClick(event) {
    console.log(`event：`,event);
    const tar = event.target
    const method = tar.getAttribute('data-method')
    const targetName = tar.tagName.toLowerCase()
    const fValue = digitalization(trimSpace(fInput.value))
    const sValue = digitalization(trimSpace(sInput.value))

    if(targetName === 'button') {
      // let res = compute()[method](fValue, sValue)
      let res = newCompute[method](fValue, sValue)
      console.log(res);
      renderResult(res)
    }
    console.log(`tar, method：`,tar, method, tar.tagName);
    
  }

  function renderResult(value) {
    let resultDom = doc.getElementsByClassName('result')[0]
    resultDom.innerHTML = value
  }

  init()
  
}(document))