import React from 'react';
import './App.css';
import WordsPromptPage from './components/WordsPromptPage';
import NaturePromptsPage from './components/NaturePromptsPage';
import {
    Switch,
    Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <h1>Poetry Prompt Generator</h1>
            <Switch>
                <Route exact path="/"><WordsPromptPage/></Route>
                <Route exact path="/natureprompts"><NaturePromptsPage/></Route>
                <Route exact path="/about"><AboutPage/></Route>
            </Switch>
        </div>
    );
}
export default App;