import React, { Component } from 'react'
import QuestionApiServices from '../../services/QuestionApiServices';

export default class ViewQuestion extends Component {

  constructor(props) {
    super(props);


    //state
    this.state = {
      id: this.props.match.params.id,
      questionDto: {}
    }


    //bind
    this.goBackList = this.goBackList.bind(this);

  }


  //cdm

  componentDidMount() {
    QuestionApiServices.getQuestionById(this.state.id).then(
      response => this.setState({
        questionDto: response.data
      })
    )
  }

  //cdm end



  //functions
  goBackList(){
    this.props.history.push("/list-question")
  }

  //functions end



  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="card col-6 mx-auto mt-5 shadow p-4">
              <h6>{this.state.questionDto.questionNumber} - {this.state.questionDto.question}</h6>
              <div className="mt-4">
                <div className="form-check">
                  <div className="form-check-input" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    {this.state.questionDto.option1}
                  </label>
                </div>
                <div className="form-check">
                  <div className="form-check-input" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                    {this.state.questionDto.option2}
                  </label>
                </div>
                <div className="form-check">
                  <div className="form-check-input" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                  {this.state.questionDto.option3}
                  </label>
                </div>
                <div className="form-check">
                  <div className="form-check-input" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                  {this.state.questionDto.option4}
                  </label>
                </div>
                <div className="form-check">
                  <div className="form-check-input" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                  {this.state.questionDto.option5}
                  </label>
                </div>

              </div>
            </div>
            <div className="mx-auto mt-1 p-2 centered">
            <button className="btn btn-outline-primary float-right my-3 p-2" onClick={() => this.goBackList()}>Go back to the list!</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
