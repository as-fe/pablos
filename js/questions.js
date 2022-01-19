"use strict";

export const questions = [
  {
    panel: "0",
    title: "Chestionar initial",
    content:
      "Rolul chestionarului este de a stabili preferintele si directiile de personalizare pentru website-ul dumneavoastra. Acesta contine 12 intrebari si poate fi completat in duoar cateva minute. In cazul in care aveti intrebari sau neclaritati, nu ezitati sa ne contactati!",
    em: "",
  },
  {
    panel: "1",
    type: "radio",
    name: "cattimp",
    question: "Radio question",
    options: [
      {
        value: "1",
        text: "Value 1",
      },
      {
        value: "2",
        text: "Value 2",
      },
      {
        value: "3",
        text: "Value 3",
      },
    ],
    foto: "foto/q1.png",
  },
  {
    panel: "2",
    type: "fileupl",
    name: "varsta",
    question: "Any files to upload?",
    options: [
      {
        value: "1",
        text: "18-25 ani",
      },
      {
        value: "2",
        text: "26-35 ani",
      },
      {
        value: "3",
        text: "36-45 ani",
      },
      {
        value: "4",
        text: "46-55 ani",
      },
      {
        value: "5",
        text: "Peste 55 de ani",
      },
    ],
    foto: "foto/q2.png",
  },
  {
    panel: "3",
    type: "color",
    name: "cemagazin",
    question: "Color 1",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q3.png",
  },
  {
    panel: "4",
    type: "text",
    name: "testa",
    question: "Simple text question",
    options: [
      {
        value: "",
        text: "",
      },
    ],

    foto: "foto/q4.png",
  },
  {
    panel: "5",
    type: "mixed",
    name: "test",
    question: "Multitype question",
    questions: [
      {
        qname: "1",
        label: "Text value",
        q: "Text value 1",
      },
    ],

    questionSel: "Test 3",
    optionsSel: [
      {
        label: "Select Value",
        value: "value1",
        text: "Value 1",
      },
      {
        label: "Select Value",
        value: "value2",
        text: "Value 2",
      },
    ],
    foto: "foto/q5.png",
  },
  {
    panel: "6",
    type: "mixed",
    name: "test",
    question: "Multi text question",
    questions: [
      {
        qname: "1",
        label: "Text 1",
        q: "Test 1",
      },
      {
        qname: "2",
        label: "Text 2",
        q: "test 2",
      },
    ],

    foto: "foto/q6.png",
  },
  {
    panel: "7",
    type: "text",
    name: "cenua",
    question: "Final comments",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q7.png",
  },
];
