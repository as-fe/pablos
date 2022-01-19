# pablos
A simple MVC survey app built with PHP and JS ES6


## adding new questions
Questions live in the questions.js file. In order to modify or add questions this is the file that should be modified.

```
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
  ```
  
  panel - tells the state the number of the question
  
  ### type - values: 
  - radio - creates radio input
  - text - creates single text input
  - checkbox - creates checkbox inputs with an "others" text field
  - fileupload - creates radio button for yes/no, displays file input in case yes is selected
  - color - creates color input
  - mixed - creates multiple inputs
  
  name: name of the fiels
  
  question: question to be displayed on top of options
  
  options - contains value (for html value tag) and text (for the label)
  
  foto: the path to the file to be displayed along with the question
  
  ### mixed questions:
  
  ```
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
  ```
  
  - questions: - qname: for the name tag, - label: for the label, - q: additional value
  
  - questionsSel: generates select box with values from optionsSel.
  - optionsSel - label: for the label, - value: for the option value, text: for the display text
