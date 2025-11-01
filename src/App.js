import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpAddress from './IpAddress'; 

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

                <Exhibit heading="Your Public IPv4 Address">
                    <IpAddress version="v4" />
                </Exhibit>

                <Exhibit heading="Your Public IPv6 Address">
                    <IpAddress version="v6" />
                </Exhibit>
            </main>
        </div>
    );
}

export default App;
