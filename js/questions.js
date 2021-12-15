"use strict";

export const questions = [
  {
    panel: "0",
    title: "Survey",
    content:
      "We start by thanking you for your availability to help! The role of the survey is to gather information about your preferences in order to improve our brand. ",
    em: "For completing the survey we will reward you with a discount voucher!",
  },
  {
    panel: "1",
    type: "radio",
    name: "cattimp",
    question: "Radio question",
    options: [
      {
        value: "1",
        text: "Option 1",
      },
      {
        value: "2",
        text: "Option 2",
      },
      {
        value: "3",
        text: "Option 3",
      },
      {
        value: "4",
        text: "Option 4",
      },
      {
        value: "5",
        text: "Option 5",
      },
    ],
    foto: "foto/q1.png",
  },
  {
    panel: "2",
    type: "text",
    name: "cemagazin",
    question: "Text question",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q2.png",
  },
  {
    panel: "3",
    type: "checkbox",
    name: "cenu",
    question: "Checkbox question",
    options: [
      {
        value: "1",
        text: "shovel",
      },
      {
        value: "2",
        text: "knife",
      },
      {
        value: "3",
        text: "sand",
      },
    ],
    foto: "foto/q3.png",
  },
  {
    panel: "4",
    type: "mixed",
    name: "test",
    question: "Multitype question",
    questions: [
      {
        qname: "1",
        label: "Make",
        q: "Test 1",
      },
      {
        qname: "2",
        label: "Model",
        q: "test 2",
      },
    ],

    questionSel: "Test 3",
    optionsSel: [
      {
        label: "Fuel",
        value: "value1",
        text: "Gas",
      },
      {
        label: "Fuel",
        value: "value2",
        text: "Diesel",
      },
    ],
    foto: "foto/q4.png",
  },
  {
    panel: "5",
    type: "mixed",
    name: "test",
    question: "Multi text question",
    questions: [
      {
        qname: "1",
        label: "Marca",
        q: "Test 1",
      },
      {
        qname: "2",
        label: "Model",
        q: "test 2",
      },
    ],

    foto: "foto/q5.png",
  },
 
];
