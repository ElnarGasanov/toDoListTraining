import './App.css';
import MainContainer from "./components/MainContainer";

function App(props) {
    return (
        <div className="App">
            <MainContainer store={props.store}/>
        </div>
    );
}

export default App;
