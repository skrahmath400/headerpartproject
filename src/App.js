import logo from './logo.svg';
import './App.css';
import Headerpart from './pages/topbar';
import Navbar from './pages/navbar';
import Containers from './pages/containers';

function App() {
  return (
    <>
    <Headerpart/>
    <div className='a'>
     <Navbar/>
     <Containers/>
     </div>
    </>
  );
}

export default App;
