import './App.css';
import Counters from './Components/Counter';
import Count from './Components/Count'
import UseForm from './USESTATE/UseForm';


function App(){

  return(
    <div className='App'>
      <Counters/>
      <Count/>
      <UseForm/>
    </div>
  )
}

export default App;
