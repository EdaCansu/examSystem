import React, { Component } from 'react'

export default class SubmitAddQuestion extends Component {
    //Constructor
    constructor(props) {
        super(props);

        //bind
        this.goToList = this.goToList.bind(this);
    }

    //function
    goToList() {
        return this.props.history.push("/list-question");
    }

    //function ends


    render() {
        return (
            <>
                <div className='container'>
                    <div className="row">
                        <div className="card col-6 mx-auto mt-5 shadow p-2">
                            <h4 className='centered'>Question added!</h4>

                            <button className="btn btn-outline-primary mx-auto my-5 p-2" onClick={() => this.goToList()}>Go to the List Page!</button>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
