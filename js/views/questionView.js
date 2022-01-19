import View from "./View.js";

class QuestionView extends View {
  constructor() {
    super();
  }
  _parentElement = document.querySelector("#root");

  _generateMarkup() {
    return `
    <div id="q${this._data.panel}" class="panou oh" data-name="q${
      this._data.panel
    }">
    
   
    <div class="half">
    <div class="back" data-name="q${Number(this._data.panel) - 1}" id="backq${
      Number(this._data.panel) - 1
    }"></div>
    
    <h1>${this._data.question}</h1>
    ${this._generateMarkupDynamically(this._data)}
    ${this._renderButton(this._data)}
    ${this._renderButtonFin(this._data)}
        </div>


    <img src="${this._data.foto}" class="fullimg half" data-name="q${
      this._data.panel
    }" />
    </div>
    `;
  }
  _generateMarkupDynamically(data) {
    let optArr = [];

    if (
      data.type === "radio" ||
      data.type === "text" ||
      data.type === "checkbox" ||
      data.type === "color"
    ) {
      data.options.forEach((opt) => {
        optArr.push(
          `<div class="full">
      <input type="${data.type}" name="q${data.panel}[]" data-clasificare="insq${data.panel}" class="${data.type}" data-name="q${data.panel}" value="${opt.value}" /> 
          <label for="q${data.panel}" data-name="q${data.panel}" >${opt.text}</label> </div>
        `
        );
      });

      if (data.type === "checkbox") {
        optArr.push(
          `<input type="text" name="q${data.panel}[]" class="text full" data-name="q${data.panel}" data-extra="y" placehloder="Alta optiune" /> `
        );
      }
      return optArr.join(" ");
    }

    if (data.type === "fileupl") {
      optArr.push(
        `<div class="full"> <input type="radio" name="q${data.panel}[]" data-clasificare="insq${data.panel}" class="${data.type} file" data-name="q${data.panel}" data-extra="yes" value="1" /> 
        <label for="q${data.panel}" data-name="q${data.panel}" >Da</label> </div> 
        <div class="full fileinput--styler hidden">  <input type="file" name="q${data.panel}[]" class="file full " data-name="q${data.panel}" data-extra="file"  /></div>
        <div class="full">
      <input type="radio" name="q${data.panel}[]" data-clasificare="insq${data.panel}" class="${data.type} file" data-name="q${data.panel}" value="0"  data-extra="no"/> 
          <label for="q${data.panel}" data-name="q${data.panel}" >Nu</label> </div> `
      );
      return optArr.join(" ");
    }

    if (data.type === "mixed") {
      optArr = [];
      var select = "";
      var selectend = "";
      var arr = [];

      data.questions.forEach((que) => {
        optArr.push(
          `<div class="full">
          <label class="full db">${que.label}</label>
              <input type="text" name="q${data.panel}[]" data-name="q${data.panel}" class="text full" placehloder="Alta optiune" /></div> `
        );
      });

      if (data.questionSel !== undefined) {
        select = `<label>${data.questionSel}</label><select name="q${data.panel}[]" data-name="q${data.panel}" class="inputselect select full">`;
        data.optionsSel.map((opt) =>
          arr.push(
            `<option value="${opt.value}" data-opt="y">${opt.text}</option>`
          )
        );
        selectend = ` </select>`;
      }
      const concatenatedSel = optArr.join(" ") + select + arr + selectend;

      return concatenatedSel;
    }
  }

  _renderButton(data) {
    return `
    <button type="submit" name="submit${
      data.panel
    }" class="butonnextchest disabled hidden" id="toq${
      Number(data.panel) + 1
    }" data-name="q${Number(data.panel) + 1}"  data-clasificare="insq${
      data.panel
    }">Pasul urmator</button>
   `;
  }

  _renderButtonFin(data) {
    return `
    <button type="submit" name="submitfin" class="butonfinal disabled hidden"  data-name="fin"   data-clasificare="insq${data.panel}">Trimite raspunsurile <img src="foto/next.png" alt="trimite" /></button>
   `;
  }

  addHandlerRadio(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("radio")) {
        handler();
      }
    });
  }

  addHandlerText(handler, sechandler) {
    this._parentElement.addEventListener("keyup", function (e) {
      var counter = 0;

      if (e.target && e.target.classList.contains("text")) {
        document.querySelectorAll(".text").forEach((tf) => {
          if (tf.value !== "") {
            counter++;
          }
          if (tf.value === "") {
            counter = 0;
          }
          if (Number(counter) === document.querySelectorAll(".text").length) {
            handler();
          }
          if (Number(counter) === 0) {
            sechandler();
          }
        });
      }
    });
  }

  addHandlerCheckbox(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("checkbox")) {
        handler();
      }
    });
  }

  addHandlerSelect(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("select")) {
        handler();
      }
    });
  }

  addHandlerFile(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("file")) {
        handler();
      }
    });
  }

  addHandlerColor(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("color")) {
        handler();
      }
    });
  }

  addHandlerBack(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("back")) {
        handler();
      }
    });
  }

  addHandlerNext(handler) {
    this._parentElement.addEventListener("click", function (e) {
      //

      if (e.target && e.target.classList.contains("butonnextchest")) {
        e.preventDefault();
        handler();
      }
    });
  }

  addHandlerLoad(handler) {
    window.addEventListener("load", handler);
  }
}

export default new QuestionView();
