import { useState } from 'react';
import styles from './Tariff.module.scss';

export function Tariff(props) {
    const { title, cost, speed, description } = props.tariff;
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        // чтобы выключить выбор, надо кликать на каждый выбранный элемент снова, я совсем не понимаю, как сделать чтобы он сначала выключался на остальных тарифах, а потом включался на кликнутом(
    };

    let TariffClass = `${styles.card}`;
    if (cost === 550) {
        TariffClass += ` ${styles.extra}`;
    }
    if (selected) {
        TariffClass += ` ${styles.selected}`;
    }

    return (
        <div className={TariffClass} onClick={handleClick}>
            <div className={styles.card__title}>
                {title} <br></br> {cost}
            </div>
            <div className={styles.card__cost}>{cost} руб/мес</div>
            <div className={styles.card__speed}>до {speed} мбит/сек</div>
            <div className={styles.card__description}>{description}</div>
        </div>
    );
}
