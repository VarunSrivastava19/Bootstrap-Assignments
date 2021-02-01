import './App.css';
import Header from './Header';
import './Header.css';
import Footer from './footer';
import './footer.css'
import Main from './main';
import Result from './result';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header className></Header>
      <Main></Main>
      <Result></Result>
      <Footer></Footer>
    </div>
  );
}

export default App;
