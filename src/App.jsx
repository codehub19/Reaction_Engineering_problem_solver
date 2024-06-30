
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import BatchConversion from './components/BatchConversion'
import ReactorType from './components/ReactorType'
import ReactionPhase from './components/ReactionPhase'
function App() {

  const handleReactorType = (e) => {
    console.log(e.target.value);
  }

  return (
    <center className='app'>
     <Header></Header>
     <ReactorType handleReactorType= {handleReactorType}></ReactorType>
     <ReactionPhase></ReactionPhase>
    </center>
  )
}

export default App
