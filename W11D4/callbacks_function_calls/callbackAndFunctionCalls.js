
window.setTimeout(() => {alert('HAMMERTIME')}, 5000);
//asynchronous


let hammerTime = function (time) {
  window.setTimeout(() => { alert(`${time} is hammertime!`)}, time)
};

