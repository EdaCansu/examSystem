import React, { Component } from 'react'
import QuestionApiServices from '../../services/QuestionApiServices'


export default class ListQuestion extends Component {

  //constructor 
  constructor(props) {
    super(props);

    //state
    this.state = {
      questionList: [],
    };

    //bind
    this.addQuestion = this.addQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.viewQuestion = this.viewQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);

  }
  //constructor ends 


  //cdm
  componentDidMount() {
    QuestionApiServices.getAllQuestions().then(
      (response) => {
        this.setState({
          questionList: response.data
        });
      }
    )
  }

  //cdm ends

  //functions
  addQuestion(id) {
    this.props.history.push(`/add-question`);
  }

  updateQuestion(id) {
    this.props.history.push(`/update-question/${id}`)
  }

  viewQuestion(id) {
    this.props.history.push(`/view-question/${id}`)
  }

  deleteQuestion(id) {
    QuestionApiServices.deleteQuestions(id).then(
      (response) => {
        this.setState({
          questionList: this.state.questionList.filter(
            questionList => questionList.id !== id
          )
        })
      });
  }
  //functions end


  //render
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center text-uppercase text-dark mt-3" >Questions</h2>
          <div className="row">
            <div className="mb-3"><button className="btn btn-primary" onClick={() => this.addQuestion()}>Add Question</button></div>
            <table className="table table-hover table-muted table-striped">
              <thead className='text-dark'>
                <tr className='centered'>
                  <th>ID</th>
                  <th>Question Number</th>
                  <th>Question</th>
                  <th>Option 1</th>
                  <th>Option 2</th>
                  <th>Option 3</th>
                  <th>Option 4</th>
                  <th>Option 5</th>
                  <th>Answer</th>
                  <th>Update</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className='text-dark'>
                {
                  this.state.questionList.map(questionList =>
                    <tr key={questionList.id} className='centered'>
                      <td>{questionList.id}</td>
                      <td>{questionList.questionNumber}</td>
                      <td>{questionList.question}</td>
                      <td>{questionList.option1}</td>
                      <td>{questionList.option2}</td>
                      <td>{questionList.option3}</td>
                      <td>{questionList.option4}</td>
                      <td>{questionList.option4}</td>
                      <td>{questionList.answer}</td>
                      <td><i className="fa-solid fa-pen-to-square" onClick={() => this.updateQuestion(questionList.id)}></i></td>
                      <td><i className="fa-solid fa-eye" onClick={() => this.viewQuestion(questionList.id)}></i></td>
                      <td><i className="fa-solid fa-square-minus" onClick={() => {
                        if (window.confirm("Are you sure you delete this question?"))
                          this.deleteQuestion(questionList.id);
                      }}></i></td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
  //render ends
}
