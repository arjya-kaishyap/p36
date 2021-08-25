class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No...");



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    var question = createElement("h3");
    var options = createElement("h4");
    var greeting = createElement("h3")



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide();
    this.input2.hide();





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.title.html("Question:- What starts and ends with the letter 'E', but has only one letter");
    this.title.position(130,0);





    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      input1.hide();
      button.hide();
      input2.hide();
      greeting.html("Thank you, Your Answer Has Been Submited");
      greeting.position(130,160);
    })


  }
}
