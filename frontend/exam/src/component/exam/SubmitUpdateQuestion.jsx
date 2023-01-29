import React, { Component } from 'react'

export default class SubmitUpdateQuestion extends Component {
//Constructor
constructor(props) {
    super(props);

    //bind
    this.updateNew = this.updateNew.bind(this);
}

//function
updateNew(){
return this.props.history.push("/list-question");
}

//function ends


  render() {
    return (
      <>
        <div className='container'>
                    <div className="row">
                    <div className="card col-6 mx-auto mt-5 shadow p-2">
                        <h4 className='centered'>Question updated!</h4>

                        <button className="btn btn-outline-primary mx-auto my-5 p-2" onClick={() => this.updateNew()}>Update another question</button>
                        </div>
                    </div>
                </div>

      </>
    )
  }
}
