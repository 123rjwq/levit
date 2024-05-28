// Определение класса "UmnyDom"
class UmnyDom {
  constructor() {
    this.osveshenie = "light-off";
    this.signalizatsiya = "alarm-on";
    this.shtory = "shors-off";
    this.zvuk = "zvyk-lati";
    this.scenarii = {
      "1. Доброе утро": {
        osveshenie: "light-on",
        signalizatsiya: "alarm-off",
        shtory: "shors-on",
        zvuk: "zvyk-on"
      },
      "2. Гулять": {
        osveshenie: "light-off",
        signalizatsiya: "alarm-on",
        shtory: "shors-off",
        zvuk: "zvyk-off"
      },
      "3. Я дома": {
        osveshenie: "light-on",
        signalizatsiya: "alarm-off",
        shtory: "shors-on",
        zvuk: "zvyk-lati"
      },
      "4. Спать": {
        osveshenie: "light-off",
        signalizatsiya: "alarm-on",
        shtory: "shors-off",
        zvuk: "zvyk-lati"
      }
    };
  }

  vklyuchitSvet() {
    this.osveshenie = "light-on";
    this.obnovitSostoyanie();
  }

  vyklyuchitSvet() {
    this.osveshenie = "light-off";
    this.obnovitSostoyanie();
  }

  vklyuchitSignalizatsiyu() {
    this.signalizatsiya = "alarm-on";
    this.obnovitSostoyanie();
  }

  vyklyuchitSignalizatsiyu() {
    this.signalizatsiya = "alarm-off";
    this.obnovitSostoyanie();
  }

  otkrytShtor() {
    this.shtory = "shors-off";
    this.obnovitSostoyanie();
  }

  zakrytShtor() {
    this.shtory = "shors-on";
    this.obnovitSostoyanie();
  }

  vklyuchitZvuk() {
    this.zvuk = "zvyk-on";
    this.obnovitSostoyanie();
  }

  vyklyuchitZvuk() {
    this.zvuk = "zvyk-off";
    this.obnovitSostoyanie();
  }

  vyklyuchitZvukVPokoye() {
    this.zvuk = "zvyk-lati";
    this.obnovitSostoyanie();
  }

  vybratStsenahriy(tsenahriy) {
    this.osveshenie = this.scenarii[tsenahriy].osveshenie;
    this.signalizatsiya = this.scenarii[tsenahriy].signalizatsiya;
    this.shtory = this.scenarii[tsenahriy].shtory;
    this.zvuk = this.scenarii[tsenahriy].zvuk;
    this.obnovitSostoyanie();
  }

  obnovitSostoyanie() {
    document.getElementById("osveshenie").src = `images/${this.osveshenie}.png`;
    document.getElementById("signalizatsiya").src = `images/${this.signalizatsiya}.png`;
    document.getElementById("shtory").src = `images/${this.shtory}.png`;
    document.getElementById("zvuk").src = `images/${this.zvuk}.png`;
  }
}

// Создание объекта "umnyDom" и вызов его методов
const umnyDom = new UmnyDom();
umnyDom.vklyuchitSvet();
umnyDom.vklyuchitSignalizatsiyu();
umnyDom.zakrytShtor();
umnyDom.vklyuchitZvuk();
umnyDom.vybratStsenahriy("1. Доброе утро");

// Визуализация состояния "умного дома" с помощью HTML, CSS и JavaScript
const scenariiSelect = document.getElementById("scenarii");
Object.keys(umnyDom.scenarii).forEach(scenario => {
  const option = document.createElement("option");
  option.value = scenario;
  option.textContent = scenario;
  scenariiSelect.add(option);
});

scenariiSelect.addEventListener("change", () => {
  umnyDom.vybratStsenahriy(scenariiSelect.value);
});

const osveshenieImg = document.getElementById("osveshenie");
const signalizatsiyaImg = document.getElementById("signalizatsiya");
const shtoryImg = document.getElementById("shtory");
const zvukImg = document.getElementById("zvuk");

osveshenieImg.src = `images/${umnyDom.osveshenie}.png`;
signalizatsiyaImg.src = `images/${umnyDom.signalizatsiya}.png`;

shtoryImg.src = `images/${umnyDom.shtory}.png`;
zvukImg.src = `images/${umnyDom.zvuk}.png`;

