import React, { Component } from 'react'

export default class UserPage extends Component {

  constructor(props) {
    super(props);

    //bind
    this.startExam = this.startExam.bind(this);
  }


  //functions
  startExam() {
    this.props.history.push("/exam")
  }

  //functions end

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto mt-5">
              <h3 className='text-white-50 mb-3'>Java Developer Assessment</h3>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Question
                  <span>10</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Duration
                  <span>40 min</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Time to Complete
                  <span>7 days</span>
                </li>
              </ul>
              <h6 className="mt-5"><i className="fa-solid fa-hand-point-right me-3"></i>Keep these in mind before you start,</h6>
              <br />
              <ul>
                <li className="mb-2">This assessment contains English questions.</li>
                <li className="mb-2">You can solve the assessment once.</li>
                <li className="mb-2">You can see the questions once in the given time.</li>
                <li className="mb-2">Do not refresh the page or use back/forward buttons.</li>
              </ul>
              <div className="d-grid gap-2 ">
                <button className="btn btn-primary mt-2" onClick={this.startExam}><i className="fa-solid fa-arrow-right me-2"></i> Start Assessment</button>
              </div>


            </div>
          </div>
        </div>




      </>
    )
  }
}
