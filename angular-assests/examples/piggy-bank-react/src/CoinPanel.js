import React, { useState } from 'react';
import './CoinPanel.css';

function CoinPanel({
    className,
    amount = 0.25, maxClicks = 10,
    total, onClick }) {

    // 1. Hooks must never run conditionally.
    const [clicks, setClicks] = useState(0);

    // 2. Render an ASCII pig immediately if
    // we reach the max clicks.
    if (clicks >= maxClicks) {
        return (
            <div className={className}>
                <pre>(^(oo)^)</pre>
            </div>
        );
    }

    const handleClick = function () {
        setClicks(clicks + 1);
        onClick(amount);
    };

    const pennies = (amount * 100).toFixed(0);
    const contributed = (amount * clicks).toFixed(2);

    let percent = 0;
    if (total > 0) {
        percent = (contributed / total * 100);
    }
    percent = percent.toFixed(1);

    // 3. Simplified JSX
    return (
        <div className={className}>
            <button className="btn" onClick={handleClick}>
                Insert {pennies}&cent;
            </button>
            <div>Contributed: ${contributed}</div>
            <div>{percent}% of total</div>
        </div>
    );
}

export default CoinPanel;