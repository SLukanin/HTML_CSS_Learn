let a = 2;
let b = 5;
console.log(`Он сказал ${a} раз \"привет\"`);
console.log("Он сказал " + b + " раз \"привет\"");

let car = {
  color: 'red',
  open(message) {
    console.log('Открыто - 2');
  }
}
car.open();

function watch(message = "adsdf") {
  return message + ".qwerty";
}

let anonym = function () {
  console.log("you are anonymous");
}

anonym();

(function () {
  console.log("you are anonymous 2");
})();

setTimeout(function () {
  console.log('Test');
}, 3000);
