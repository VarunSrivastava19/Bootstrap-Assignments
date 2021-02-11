import './App.css';
import Header from './Components/Header/Header';
import './Components/Header/Header.css';
import Footer from './Components/Footer/footer';
import './Components/Footer/footer.css';
import Question from './Components/Question/question';
import './theme.css';
import Result from './Components/Result/result';
import 'bootstrap/dist/css/bootstrap.css';
import Sum from './Components/Validator/validator';
import Questions from './questionsList';
import Main from './Components/Main/main'
import AddQuestion from './Components/AddQuestion/addquestion'
import Home from './Components/Home/Home';
import { Route } from 'react-router-dom';
import Redux from './redux';


function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/" component={Main}></Route>
      <Route path="/redux" component={Redux}></Route>
      {/* <Sum/> */}
      {/* <Home/> */}
      {/* <AddQuestion/> */}
      {/* <Result/> */}
      <Footer/>
    </div>
  );
}

export default App;
