import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Cards from './Cards';
import MainPageAbout from './MainPageAbout';


function App() {
  return (
    <>
    <div className='bg-sky-50'>
        <Navbar />
        <Header />
        <Cards />
        <MainPageAbout />

    </div>

    </>
  );
}

export default App;
