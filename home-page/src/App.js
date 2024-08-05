import './App.css';
import Nav from './Nav';
import Header from './Header';
import MidMainDigi from './MidMainDigi';
import About from './About';

function App() {
  return (
    <div className='bg-palegreen h-full'> 
      <Nav />
      <Header />
      <MidMainDigi />
      <About />
    </div>
    
  );
}

export default App;
