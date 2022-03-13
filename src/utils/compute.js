// 这种导出方式不好；要执行的话，需要compute()[method]()这么写，很别扭

function compute() {
  function plus(a, b) {
    return a + b;
  }

  function sub(a,b) {
    return a - b;
  }

  function mul(a,b) {
    return a * b;
  }

  function div(a,b) {
    return a / b;
  }
  return {
    plus,
    sub,
    mul,
    div
  }
}

const newCompute = (function(){
  function plus(a, b) {
    return a + b;
  }

  function sub(a,b) {
    return a - b;
  }

  function mul(a,b) {
    return a * b;
  }

  function div(a,b) {
    return a / b;
  }
  return {
    plus,
    sub,
    mul,
    div
  }
}())



export  {compute, newCompute} 