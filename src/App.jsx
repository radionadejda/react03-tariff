import { useState, useEffect } from 'react';
import './App.scss';

import tariffs from './tariffs.json';
import { Tariff } from './components/Tariff/Tariff';

function App() {
    const [selectedTariffIndex, setSelectedTariffIndex] = useState(null);

    const handleTariffClick = (index) => {
        if (selectedTariffIndex === index) {
            setSelectedTariffIndex(null);
        } else {
            setSelectedTariffIndex(index);
        }
    };

    const handleClickOutsideTariff = (event) => {
        const isClickedOnTitle = event.target.closest('.title');
        const isClickedInsideCatalogue = event.target.closest('.catalogue');
        if (isClickedOnTitle || !isClickedInsideCatalogue) {
            setSelectedTariffIndex(null);
        }
    };
    // This effect runs only on mount and cleans up on unmount
    useEffect(() => {
        document.addEventListener('click', handleClickOutsideTariff);

        return () => {
            document.removeEventListener('click', handleClickOutsideTariff);
        };
    }, []);

    return (
        <div className="body">
            <h1 className="title">вот такие тарифы у нас есть</h1>
            <div className="catalogue" id="catalogue">
                {tariffs.map((tariff, index) => (
                    <Tariff key={index} tariff={tariff} selected={index === selectedTariffIndex} onClick={() => handleTariffClick(index)} />
                ))}
            </div>
        </div>
    );
}

export default App;
