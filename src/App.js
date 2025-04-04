import React from 'react';
import Joke from './components/Joke';  // Default export (no curly braces)

function App() {
    return (
        <div className="App">
            <h1>Joke Generator Using React and Joke API</h1>
            <Joke />
        </div>
    );
}

export default App;  // Use default export
