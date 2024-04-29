import logo from './logo.svg';
import image from './image.png';
import './App.css';
import TitleElement from './components/TitleElement';
import UndertitleElement from "./components/UndertitleElement";
import GetInvolvedButton from './components/GetInvolverButton';
import BlogComponent from './components/BlogComponent';


function App() {
  return (
    <div className="App">
       <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <TitleElement name="About Us"></TitleElement>
        <UndertitleElement text="Corem ipsum dolor sit amet, consectetur adipiscing"></UndertitleElement>
        <GetInvolvedButton></GetInvolvedButton>
        <BlogComponent image={image} title="Rathaus Tour" description="Sorem ipsum dolor sit amet, consectetur adipiscing elit."></BlogComponent>
      </header>
    </div>
  );
}

export default App;
