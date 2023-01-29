import React, { Component } from 'react'
import QuestionApiServices from '../../services/QuestionApiServices';

export default class UpdateQuestion extends Component {
  //constructor
  constructor(props) {
    super(props);

    //state
    this.state = {
      id: this.props.match.params.id,
      questionNumber: "",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
      answer: "",
    }


    //bind
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeQuestionNumber = this.onChangeQuestionNumber.bind(this);
    this.onChangeOption1 = this.onChangeOption1.bind(this);
    this.onChangeOption2 = this.onChangeOption2.bind(this);
    this.onChangeOption3 = this.onChangeOption3.bind(this);
    this.onChangeOption4 = this.onChangeOption4.bind(this);
    this.onChangeOption5 = this.onChangeOption5.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submitPage = this.submitPage.bind(this);
    this.cancel = this.cancel.bind(this);

  }
  //constructor ends

  //cdm
  componentDidMount() {
    QuestionApiServices.getQuestionById(this.state.id).then(
      response => {
        const questionDto = response.data;
        this.setState({
          questionNumber: questionDto.questionNumber,
          question: questionDto.question,
          option1: questionDto.option1,
          option2: questionDto.option2,
          option3: questionDto.option3,
          option4: questionDto.option4,
          option5: questionDto.option5,
          answer: questionDto.answer,
        })
      }
    )

  }

  //cdm ends

  //funtions
  onChangeQuestion = (event) => {
    this.setState({
      question: event.target.value
    })
  }
  onChangeQuestionNumber = (event) => {
    this.setState({
      questionNumber: event.target.value
    })
  }
  onChangeOption1 = (event) => {
    this.setState({
      option1: event.target.value
    })
  }
  onChangeOption2 = (event) => {
    this.setState({
      option2: event.target.value
    })
  }
  onChangeOption3 = (event) => {
    this.setState({
      option3: event.target.value
    })
  }
  onChangeOption4 = (event) => {
    this.setState({
      option4: event.target.value
    })
  }
  onChangeOption5 = (event) => {
    this.setState({
      option5: event.target.value
    })
  }
  onChangeAnswer = (event) => {
    this.setState({
      answer: event.target.value
    })
  }



  //Cancel

  cancel() {
    return this.props.history.push("/list-question");
  }

  //Submit
  submitPage = (event) => {

    const questionDTO = {
      questionNumber: this.state.questionNumber,
      question: this.state.question,
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4,
      option5: this.state.option5,
      answer: this.state.answer,
    }
    console.log(questionDTO);
    QuestionApiServices.updateQuestion(this.state.id, questionDTO).then(
      response => {
        console.log(response);
        if (response.status === 200) {
          return this.props.history.push("/updated")
        }
      }
    )
  }
  //function end


  //rende-
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="card col-6 mx-auto mt-5 shadow p-4">
              <h6>Question Update</h6>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="card col-6 mx-auto mt-3 shadow p-4">
              <div className='form-group mb-3'>
                <label htmlFor="questionNumber">Question Number</label>
                <input type="text" name="questionNumber" id="questionNumber" onChange={this.onChangeQuestionNumber} value={this.state.questionNumber} className='form-control' placeholder='Question Number..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="question">Question</label>
                <input type="text" name="question" id="question" onChange={this.onChangeQuestion} value={this.state.question} className='form-control' placeholder='Question..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="option1">Option 1</label>
                <input type="text" name="option1" id="option1" onChange={this.onChangeOption1} value={this.state.option1} className='form-control' placeholder='Option 1..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="option2">Option 2</label>
                <input type="text" name="option2" id="option2" onChange={this.onChangeOption2} value={this.state.option2} className='form-control' placeholder='Option 2..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="option1">Option 3</label>
                <input type="text" name="option3" id="option3" onChange={this.onChangeOption3} value={this.state.option3} className='form-control' placeholder='Option 3..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="option1">Option 4</label>
                <input type="text" name="option4" id="option4" onChange={this.onChangeOption4} value={this.state.option4} className='form-control' placeholder='Option 4..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="option1">Option 5</label>
                <input type="text" name="option5" id="option5" onChange={this.onChangeOption5} value={this.state.option5} className='form-control' placeholder='Option 5..' />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="option1">Answer</label>
                <input type="text" name="answer" id="answer" onChange={this.onChangeAnswer} value={this.state.answer} className='form-control' placeholder='Answer..' />
              </div>
              <div className='form-group mt-3 float-end mx-auto'>
                <button className="btn btn-outline-danger me-3" onClick={() => this.cancel()}>Cancel</button>
                <button className="btn btn-outline-primary" onClick={() => this.submitPage()}>Submit</button>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}
