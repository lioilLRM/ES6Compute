// 装饰器
export default  (target)=> {
  // 箭头函数没有this  this是引用外部的this  当被引用的时候，谁引用这个装饰，target就是谁

  target.prototype.plus = function (a, b) {
    return a + b;
  }
   target.prototype.sub = function (a,b) {
    return a - b;
  }

   target.prototype.mul = function (a,b) {
    return a * b;
  }

   target.prototype.div = function (a,b) {
    return a / b;
  }
}