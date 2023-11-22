import styles from './Tariff.module.scss';

export function Tariff(props) {
    const { title, cost, speed, description } = props.tariff;
    let TariffClass = `${styles.card}`;
    if (cost === 550) {
        TariffClass += ` ${styles.extra}`;
    }

    return (
        <div className={TariffClass}>
            <div className={styles.card__title}>
                {title} <br></br> {cost}
            </div>
            <div className={styles.card__cost}>{cost} руб/мес</div>
            <div className={styles.card__speed}>до {speed} мбит/сек</div>
            <div className={styles.card__description}>{description}</div>
        </div>
    );
}
