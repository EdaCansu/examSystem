import axios from "axios";

const QUESTİON_URL = "/admin/control"

class QuestionApiServices {

    //List
    getAllQuestions() {
        return axios.get(QUESTİON_URL + "/list")
    }

    //Find
    getQuestionById(id){
        return axios.get(`${QUESTİON_URL}/${id}`)
    }

    //Number Find
    findByQuestionNumber(questionNumber){
        return axios.get(QUESTİON_URL + "/number/" + questionNumber)
    }


    //Create
    createQuestion(questionDto){
        return axios.post(QUESTİON_URL, questionDto)
    }



    //Update
    updateQuestion(id, questionDto){
        return  axios.put(`${QUESTİON_URL}/${id}`, questionDto)
    }


    //Delete
    deleteQuestions(id) { 
        return axios.delete(`${QUESTİON_URL}/${id}`)
    }

}

export default new QuestionApiServices();