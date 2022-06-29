const btnVal = document.querySelector("#valida");
const btnIdade = document.querySelector("#calcIdade");
const inputs = document.querySelectorAll(".form-input");
const form = document.querySelector("form");
const select = document.querySelector("select");
const option = document.querySelector("option");
const progress = document.querySelector("#progress");
const title = document.querySelector(".title-modal");
const p = document.querySelector(".p-dinamic");

select.addEventListener("change", (e) => {
  select.classList.remove("select");
});

btnIdade.addEventListener("click", (e) => {
  e.preventDefault();

  let userinput = document.querySelector("#nasc").value;
  let birthD = new Date(userinput);

  if (userinput == null || userinput == "") {
    const danger = document.querySelector(".hiddenM");
    danger.classList.remove("hiddenM");
    danger.classList.add("choose");
    setTimeout(() => {
      danger.classList.remove("choose");
      danger.classList.add("hiddenM");
    }, 6000);
    return false;
  } else {
    let month = Date.now() - birthD.getTime();

    let age_d = new Date(month);

    let year = age_d.getUTCFullYear();

    let age = Math.abs(year - 1970);

    title.textContent = `Sua idade é ${age} anos`;
    p.textContent = "";
    window.location = "#demo-modal";
    setTimeout(() => {
      window.location = "#";
    }, 3000);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  title.textContent = `Cadastro Realizado com Sucesso!`;
  p.textContent = "Seja bem vindo ao nosso banco de dados ᕦ(ò_óˇ)ᕤ";
  window.location = "#demo-modal";
  select.classList.add("select");
  progress.classList.add("progress");
  setTimeout(() => {
    window.location = "#";
    progress.classList.remove("progress");
    inputs.forEach((input) => {
      input.value = "";
    });
  }, 9500);
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
