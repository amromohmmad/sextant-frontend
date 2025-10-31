import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
    return (
        <div className="App">
            <Banner />
            <main>
                <Exhibit heading="About Sextant">
                    <p>
                        Sextant is a data visualization tool designed to make complex data simple and clear.
                    </p>
                </Exhibit>

                <Exhibit heading="Features">
                    <ul>
                        <li>Interactive charts</li>
                        <li>Customizable dashboards</li>
                        <li>Real-time updates</li>
                    </ul>
                </Exhibit>
            </main>
        </div>
    );
}

export default App;
