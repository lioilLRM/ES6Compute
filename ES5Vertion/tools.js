const tools = (function() {
  function digitalize(str) {
    return Number(str.replace(/\s+/g, '')) || 0
  }

  function getTarget(event) {
    var e = event.target || window.event
    return e.target || e.srcElement
  }
  return {
    digitalize: digitalize,
    getTarget: getTarget
  }
}())
