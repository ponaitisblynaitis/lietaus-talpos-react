import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Skaiciuotuvas from './components/skaiciuotuvas';

function App() {



  return (
    <div className='container'>
        <h3 class='mt-5' >Skaičiuotuvas </h3>
        <div>
          <div class='row'>
            <Skaiciuotuvas></Skaiciuotuvas>
          </div>
        
        </div>
      
    </div>
  );
}

export default App;
