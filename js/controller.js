import * as model from "./model.js";
import initialView from "./views/initialView.js";
import questionView from "./views/questionView.js";

const locatie = document.querySelector("#locatie"); 
const bar = document.querySelector(".bar");
const checkbox = document.querySelectorAll('input[type = "checkbox"]');
const next = document.querySelector(".butonnextchest");
let barinc, checked;
const ansarray = [];

const displayBut = function () {
  if (Number(model.state.location) === Number(model.qNo)) {
    displayButFin();
  } else {
    document.querySelector(".butonnextchest").classList.remove("hidden");
  }
};

const displayButCheck = function () {
  if (Number(model.state.location) === Number(model.qNo)) {
    displayButFin();
  } else {
    checked = 0;
    document.querySelectorAll('input[type = "checkbox"]').forEach((nm) => {
      if (nm.checked) {
        checked++;
      }
      checked > 0
        ? document.querySelector(".butonnextchest").classList.remove("hidden")
        : document.querySelector(".butonnextchest").classList.add("hidden");
    });
  }
};

const displayButFin = function () {
  document.querySelector(".butonfinal").classList.remove("hidden");
};

const hideButton = function () {
  if (model.state.type !== "checkbox") {
    document.querySelector(".butonnextchest").classList.add("hidden");
    document.querySelector(".butonfinal").classList.add("hidden");
  }
};

const Load = function () {
  model.getQInfo("0");
  initialView.render(model.state.currentQuestion);
  document.querySelector("#totalq").textContent = model.qNo;
  updLocation();
};
const LoadQ = function () {
  model.getQInfo("1");
  questionView.render(model.state.currentQuestion);
  document.querySelector("#totalq").textContent = model.qNo;
  updLocation();
};

const goBack = function () {
  model.getQInfo(`${model.state.location - 1}`);
  questionView.render(model.state.currentQuestion);
  updLocation();

  
};



const goNext = function () {
  const vari = "q" + model.state.location;
  
  const response = document.querySelectorAll(
    `input[name="q${model.state.location}[]"]`
  );
  const select = document.querySelectorAll(`.select`);

  response.forEach(function retrive(res) {
    if (model.state.type === "radio" || model.state.type === "checkbox") {
      res.checked ? ansarray.push(`q${model.state.location}:${res.value}`) : ``;
    
    }
    if (res.dataset.extra === "y") {
      ansarray.push(`q${model.state.location}:${res.value}`);
    }
    if (model.state.type === "text" || model.state.type === "mixed") {
      res.value ? ansarray.push(`q${model.state.location}:${res.value}`) : ``;
    }
    
  });

  select.forEach(function retrieveSel(sel) {
    ansarray.push(`q${model.state.location}:${sel.value}`);
  });

  document.querySelector("#json").value = ansarray;

  model.getQInfo(`${Number(model.state.location) + 1}`);
  questionView.render(model.state.currentQuestion);
  updLocation();
};

const updLocation = function () {
  barinc = Number(model.state.location) * Number(100 / model.qNo);
  locatie.textContent = Number(model.state.location);
  bar.setAttribute("style", "width:" + barinc + "%");
};

const init = function () {
  initialView.addHandlerLoad(Load);
  questionView.addHandlerRadio(displayBut);
  questionView.addHandlerSelect(displayBut);
  questionView.addHandlerText(displayBut, hideButton);
  questionView.addHandlerCheckbox(displayButCheck);
  questionView.addHandlerBack(goBack);
  questionView.addHandlerNext(goNext);

  initialView.addHandlerNext(goNext);
};
init();
