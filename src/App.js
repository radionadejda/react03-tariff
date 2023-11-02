import './_App.scss';

import { tariffs } from './components/tariffs';
import { Tariff } from './components/tariff/Tariff';

// "дизайн" конечно тот еще кринж получился)

function App() {
    return (
        <div className="body">
            <h1 className="title">выберите тариф</h1>
            <div className="catalogue" id="catalogue">
                {tariffs.map((tariff, index) => <Tariff key={index} tariff={tariff} />)}
            </div>
        </div>
    );
}

export default App;
