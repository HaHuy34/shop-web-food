const curentTime = () => {
  const el = document.querySelector(".times");
//Lấy giờ hiện tại theo thời gian thực

  let date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;
  let time = `${hh}:${mm}:${ss}`;

  el.innerText = time;
};

curentTime();
setInterval(curentTime, 1000);
