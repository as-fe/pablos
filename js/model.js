
import { questions } from "./questions.js";

export const state = {
  currentQuestion: {},
  location: "",
  type: "",
  responses: {},
};

export const getQInfo = function (id) {
  questions.forEach((q) => (state.responses["q" + q.panel] = ""));
  questions.find((pnl) => {
    if (pnl.panel === id) {
      state.currentQuestion = pnl;
      state.location = pnl.panel;
      state.type = pnl.type;
    }
  });
};

export const qNo = Number(questions.length) - 1;
