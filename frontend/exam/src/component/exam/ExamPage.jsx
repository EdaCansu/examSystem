import React, { Component } from "react";
import QuestionApiServices from "../../services/QuestionApiServices";
import Countdown from "../../Countdown";


class ExamPage extends Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      questionList: [],
      questionList2: [],
      nmbr: 1,
      time: 5,
    };

    //bind
    this.changeQuestion = this.changeQuestion.bind(this);
  }

  //cdm
  componentDidMount() {
    QuestionApiServices.getAllQuestions().then(
      (response) => {
        this.setState({
          questionList: response.data
        });
      }
    )

    QuestionApiServices.findByQuestionNumber(1).then(
      (response) => {
        this.setState({
          questionList2: response.data
        });
      }
    )
    this.startTimer();
  }
  //cdm end

  //cdu
  componentDidUpdate(prevProps, prevState) {
    if (prevState.questionNumber !== this.state.questionNumber) {
      this.startTimer();
    }
  }
  //cdu end

  //timer function
  startTimer() {
    clearInterval(this.intervalId);
    this.setState({ time: 240 });
    this.intervalId = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
      if (this.state.time === 0) {
        clearInterval(this.intervalId);
        this.setState({ nmbr: this.state.nmbr + 1 })
        this.changeQuestion(this.state.nmbr);
      }
    }, 1000);
  }
  //timer function ends


  //functions
  changeQuestion(number) {
    number = number + 1
    this.setState({ nmbr: this.state.nmbr + 1 })
    if (number > this.state.questionList.length) {
      this.props.history.push("/end")
    }
    QuestionApiServices.findByQuestionNumber(number).then(
      (response) => {
        this.setState({
          questionList2: response.data
        });
      }
    )
    this.startTimer()
  }

  //functions end

  //render
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto mt-5">

              {this.state.questionList2.map(questionList2 =>
                <div key={questionList2.questionNumber}>
                  <button className="btn btn-outline-primary float-end"><Countdown seconds={this.state.time} /></button>
                  <br />
                  <br />
                  <h6>{questionList2.questionNumber} - {questionList2.question}</h6>

                  <div className="mt-4">
                    <div className="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        {questionList2.option1}
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        {questionList2.option2}
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {questionList2.option3}
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        {questionList2.option4}
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        {questionList2.option5}
                      </label>
                    </div>
                    <button className="btn btn-outline-primary btn-sm mt-3" onClick={() => this.changeQuestion(questionList2.questionNumber)}>Next!</button>
                  </div>
                </div>
              )
              }

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ExamPage;