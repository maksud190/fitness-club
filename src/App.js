import './App.css';
import Cards from './components/Cards/Cards';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <MainPage></MainPage>
      <Cards></Cards>
      <div className='qna'>
          <div>
            <h4></h4>
          </div>
      </div>
    </div>
  );
}

export default App;
