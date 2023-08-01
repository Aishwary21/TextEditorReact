// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
        
    <Navbar title="Text Editor"/>
    <div className="container">
      <TextForm heading="Enter the text"/>
    </div>    
    </>
  );
}

export default App;
