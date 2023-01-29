import React, { Component } from 'react'

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.listQuestion = this.listQuestion.bind(this);
        this.userPage = this.userPage.bind(this);
    }

    //functions

    listQuestion() {
        this.props.history.push("/list-question")
    }

    userPage() {
        this.props.history.push("/user")
    }

    //funtions end 

    render() {
        return (
            <div>

                <div style={
                    {
                        fontFamily: "serif",
                        fontSize: '2rem',
                        textAlign: 'center',
                        marginTop: '3rem',
                    }
                }>
                    <p>edacansu</p>
                </div>


                <div className="centered">
                    <button type="button" className="btn btn-outline-success col-3 optionButton" onClick={this.userPage}>User</button>
                    <button type="button" className="btn btn-outline-info col-3 optionButton" onClick={this.listQuestion}>Admin</button>
                </div>

                <div style={
                    {
                        fontSize: '0.8rem',
                        textAlign: 'center',
                        marginTop: '13rem',
                    }
                }>
                    <p>© EdaCansu Technology 2023</p>
                </div>

            </div>
        )
    }
}
