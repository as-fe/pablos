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
    question: "Varianta de design aleasa",
    options: [
      {
        value: "1",
        text: "Varianta 1",
      },
      {
        value: "2",
        text: "Varianta 2",
      },
      {
        value: "3",
        text: "Varianta 3",
      },
    ],
    foto: "foto/q1.png",
  },
  {
    panel: "2",
    type: "fileupl",
    name: "varsta",
    question: "Afacerea dvs. are o sigla?",
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
    question: "Culoarea 1",
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
    type: "color",
    name: "culsec",
    question: "Culoarea 2",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q3.png",
  },
  {
    panel: "5",
    type: "radio",
    name: "teast",
    question: "Ce fel de font preferati pentru titluri?",
    options: [
      {
        value: "1",
        text: "Sans-Serif",
      },
      {
        value: "2",
        text: "Serif",
      },
      {
        value: "3",
        text: "Handwriting",
      },
    ],

    foto: "foto/q4.png",
  },
  {
    panel: "6",
    type: "radio",
    name: "teast",
    question: "Ce fel de font preferati pentru text?",
    options: [
      {
        value: "1",
        text: "Sans-Serif",
      },
      {
        value: "2",
        text: "Serif",
      },
      {
        value: "3",
        text: "Handwriting",
      },
    ],

    foto: "foto/q4.png",
  },
  {
    panel: "7",
    type: "radio",
    name: "test",
    question: "Ce stil de icons preferati?",
    options: [
      {
        value: "1",
        text: "simple",
      },
      {
        value: "2",
        text: "outline",
      },
      {
        value: "3",
        text: "chenar",
      },
    ],

    foto: "foto/q5.png",
  },
  {
    panel: "8",
    type: "text",
    name: "testa",
    question: "Numele dvs.",
    options: [
      {
        value: "",
        text: "",
      },
    ],

    foto: "foto/q6.png",
  },
  {
    panel: "9",
    type: "text",
    name: "cenua",
    question: "Adresa de email",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q7.png",
  },
  {
    panel: "10",
    type: "text",
    name: "cenua",
    question: "Numar de telefon",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q8.png",
  },
  {
    panel: "11",
    type: "text",
    name: "cenua",
    question: "CUI-ul societatii",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q9.png",
  },
  {
    panel: "12",
    type: "text",
    name: "cenua",
    question: "Alte precizari, mentiuni",
    options: [
      {
        value: "",
        text: "",
      },
    ],
    foto: "foto/q10.png",
  },
];
