import React from 'react';
import './App.css';

function Exhibit({ heading, children }) {
    return (
        <section className="exhibit">
            <h2>{heading}</h2>
            <div className="exhibit-content">
                {children}
            </div>
        </section>
    );
}

export default Exhibit;
