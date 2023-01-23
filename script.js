const getClock = () => {
  const deg = 6;
  const time = new Date();
  var second = time.getSeconds() * deg;
  var minute = time.getMinutes() * deg;
  var hour = time.getHours() * 30 + minute / 12;
  document.querySelector(".second").style.transform =
    "rotate(" + second + "deg)";
  document.querySelector(".minute").style.transform =
    "rotate(" + minute + "deg)";
  document.querySelector(".hour").style.transform = "rotate(" + hour + "deg)";
};

getClock();
setInterval(getClock, 1000);
