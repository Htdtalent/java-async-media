import React, { useState } from 'react';
import CoinPanel from './CoinPanel';
import './PiggyBank.css';

// 1. If our parent doesn't pass data,
// we need a default.
const DEFAULT_COIN_CONFIG = [
    { amount: 0.25, maxClicks: 10 },
    { amount: 0.10, maxClicks: 10 },
    { amount: 0.05, maxClicks: 10 },
    { amount: 0.01, maxClicks: 10 }
];

// 2. Destructure props with a default.
function PiggyBank({ coinConfig = DEFAULT_COIN_CONFIG }) {

    const [total, setTotal] = useState(0.0);

    const increaseTotal = function (amount) {
        setTotal(total + amount);
    };

    // 3. Creates a <CoinPanel> from amount and maxClicks.
    const makeCoinPanel = function (configItem) {
        return <CoinPanel
            key={[configItem.amount, configItem.maxClicks].join("-")}
            className="col"
            amount={configItem.amount}
            maxClicks={configItem.maxClicks}
            onClick={increaseTotal}
            total={total} />;
    };

    return (
        <div className="piggy-bank">
            <div className="row">
                {/* 4. Map from data to JSX. */}
                {coinConfig.map(makeCoinPanel)}
            </div>
            <h4>Total: ${total.toFixed(2)}</h4>
        </div>
    );
}

export default PiggyBank;