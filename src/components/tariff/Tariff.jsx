import './_Tariff.scss';

export function Tariff(props) {
    const { title, cost, speed, description } = props.tariff;
    let TariffClass = 'card';
    cost === 550 && (TariffClass += ' extra');
    return (
        <div className={TariffClass}>
            <div className="card__title">
                {title} <br></br> {cost}
            </div>
            <div className="card__cost">{cost} руб/мес</div>
            <div className="card__speed">до {speed} мбит/сек</div>
            <div className="card__description">{description}</div>
        </div>
    );
}
