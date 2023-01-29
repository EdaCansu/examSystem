import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListQuestion from './component/exam/ListQuestion';
import HomePage from './component/exam/HomePage';
import UpdateQuestion from './component/exam/UpdateQuestion';
import ViewQuestion from './component/exam/ViewQuestion';
import UserPage from './component/exam/UserPage';
import Header from './component/Header';
import Footer from './component/Footer';
import ExamPage from './component/exam/ExamPage';
import ExamEnd from './component/exam/ExamEnd';
import AddQuestion from './component/exam/AddQuestion';
import SubmitUpdateQuestion from './component/exam/SubmitUpdateQuestion';
import SubmitAddQuestion from './component/exam/SubmitAddQuestion';


function App() {

  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <div>
            <Header/>
            <Route path="/list-question" component={ListQuestion}></Route>
            <Route path="/add-question" component={AddQuestion}></Route>
            <Route path="/update-question/:id" component={UpdateQuestion}></Route>
            <Route path="/view-question/:id" component={ViewQuestion}></Route>
            <Route path="/added" component={SubmitAddQuestion}></Route>
            <Route path="/updated" component={SubmitUpdateQuestion}></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route path="/exam" component={ExamPage}></Route>
            <Route path="/end" component={ExamEnd}></Route>
            <Footer/>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
