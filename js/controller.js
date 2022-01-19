import * as model from "./model.js";
import initialView from "./views/initialView.js";
import questionView from "./views/questionView.js";

const locatie = document.querySelector("#locatie");
const bar = document.querySelector(".bar");
let barinc, checked;
const ansarray = [];

const displayBut = function (event) {
  if (Number(model.state.location) === Number(model.qNo)) {
    displayButFin();
  } else {
    document.querySelector(".butonnextchest").classList.remove("hidden");

    if (document.querySelector(".fileupl") !== null) {
      document.querySelectorAll(".file").forEach(function (f) {
        if (f.dataset.extra === "yes" && f.checked === true) {
          document
            .querySelector(".fileinput--styler")
            .classList.remove("hidden");
        }
        if (f.dataset.extra === "no" && f.checked === true) {
          document.querySelector(".fileinput--styler").classList.add("hidden");
        }
      });
    }
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

const goBack = function () {
  model.getQInfo(`${model.state.location - 1}`);
  questionView.render(model.state.currentQuestion);
  updLocation();

  ansarray.find((el) =>
    el.substr(0, 3) === `q` + model.state.location + `:`
      ? ansarray.splice(ansarray.indexOf(el))
      : console.log("gresit")
  );
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
    if (
      model.state.type === "text" ||
      model.state.type === "mixed" ||
      model.state.type === "color"
    ) {
      res.value ? ansarray.push(`q${model.state.location}:${res.value}`) : ``;
    }
    if (res.dataset.extra === "file") {
      console.log(res);
      console.log(res.parentElement.parentElement.parentElement);
      document.getElementById("finp").appendChild(res);
    }
  });

  select.forEach(function retrieveSel(sel) {
    ansarray.push(`q${model.state.location}:${sel.value}`);
  });

  document.querySelector("#json").value = ansarray;

  model.getQInfo(`${Number(model.state.location) + 1}`);
  questionView.render(model.state.currentQuestion);
  updLocation();
  if (Number(model.state.location) === Number(model.qNo)) {
    displayButFin();
  }
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
  questionView.addHandlerFile(displayBut);
  questionView.addHandlerColor(displayBut);
  questionView.addHandlerBack(goBack);
  questionView.addHandlerNext(goNext);
  initialView.addHandlerNext(goNext);
  document.getElementById("qno").value = model.qNo;
};
init();
