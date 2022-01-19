import View from "./View.js";

class InitialView extends View {
  constructor() {
    super();
  }
  _parentElement = document.querySelector("#root");

  _generateMarkup() {
    return `
    <div class="full">
    <div id="initial" class="panou oh">
    <h1>${this._data.title}</h1>
    <p>${this._data.content}</p>
    <p><strong>${this._data.em}</strong></p>
 
    ${this._renderButton()}
    
        </div>

    </div>
    `;
  }

  _renderButton() {
    return `
    <a class="butonnext" id="toq1" data-name="q1">Sa incepem</a>
   `;
  }

  addHandlerNext(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("butonnext")) {
        handler();
      }
    });
  }

  addHandlerLoad(handler) {
    window.addEventListener("load", handler);
  }
}

export default new InitialView();
