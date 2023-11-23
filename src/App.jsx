import { useState } from 'react';
import './App.scss';

import tariffs from './tariffs.json';
import { Tariff } from './components/Tariff/Tariff';

// "дизайн" конечно тот еще кринж получился)

function App() {
    return (
        <div className="body">
            <h1 className="title">вот такие тарифы у нас есть</h1>
            <div className="catalogue" id="catalogue">
                {tariffs.map((tariff, index) => (
                    <Tariff key={index} tariff={tariff} />
                ))}
            </div>
        </div>
    );
}

export default App;
