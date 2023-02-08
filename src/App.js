import './App.css';
import Voiture from './Composants/Voiture.jsx';
import Appart from './Composants/Appart';
import Person from './Composants/Person';
import Players from './Composants/Players';



function App() {
  return (
    <div className="App">
      <ul>
          <li>
            <Voiture/>
          </li>  
          <li>
            <Appart/>
          </li>  
          <li>
            <Person/>
          </li> 
          <li>
            <Players/>
          </li>  
      </ul> 
    </div>
  )
}

export default App;

