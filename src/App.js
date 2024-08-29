import './App.css';
import reviews from "./data";
import Testimonials from './components/Testimonials'; 


function App() {
  return (
    <div className="App">
      <div className='innerApp'>
        <h1 className='heading'>Our Testimonials</h1>
        <div className='line'></div>
        <Testimonials reviews = {reviews}/>
      </div>
    </div>
  );
}

export default App;
