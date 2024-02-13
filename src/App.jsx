import './App.css'
import Team from './Team';
import Counter from './counter';
import Users from './Users';
import Friends from './Friends';
import Friendss from './Friends';

function App() {
  
  function eventHandel (){
    alert('your no internet');
  }

  const eventHandel2 = () =>{
    alert('your network very slow');
  }

  return (
    <>

    <Friendss></Friendss>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
      <h1>Vite + React</h1>
      <button onClick={eventHandel}>one Click</button>
      <button onClick={eventHandel2}>Second Click</button>
      <button onClick={() => {alert('your net not working')}}>Third Click</button>
      
      
    </>
  )
}

export default App
