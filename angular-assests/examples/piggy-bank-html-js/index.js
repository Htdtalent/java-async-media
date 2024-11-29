(function () {

    const state = {};

    // NEW CODE
    function onCoinButtonClick() {
        updateCoinComponent(this);
        updateAllComponents();
    }

    function updateCoinComponent(btn) {

        const componentId = btn.getAttribute("data-id");
        const componentState = state[componentId];

        componentState.clicks++;
        componentState.coinTotal += componentState.amountPerClick;
        componentState.contributedPanel.innerText = `Contributed: $${componentState.coinTotal.toFixed(2)}`;

        if (componentState.clicks >= componentState.maxClicks) {
            btn.setAttribute("disabled", "disabled");
            const valueAsCents = (componentState.amountPerClick * 100).toFixed(0);
            btn.innerText = `${valueAsCents}\u00A2 - clicked ${componentState.maxClicks} times.`;
        }
    }

    function updateAllComponents() {
        let total = 0.0;
        for (let key in state) {
            total += state[key].coinTotal;
        }

        document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;

        for (let key in state) {
            const percent = (state[key].coinTotal / total * 100).toFixed(0);
            state[key].percentPanel.innerText = `${percent}% of total`;
        }
    }
    // </NEW CODE>

    function registerCoinComponent(id, amountPerClick, maxClicks) {

        const div = document.getElementById(id);
        const button = div.querySelector("button");
        const childDivs = div.querySelectorAll("div");

        button.setAttribute("data-id", id);

        state[id] = {
            contributedPanel: childDivs[0],
            percentPanel: childDivs[1],
            maxClicks,
            amountPerClick,
            clicks: 0,
            coinTotal: 0.0
        };

        button.addEventListener("click", onCoinButtonClick);
    }

    registerCoinComponent("coinQuarter", 0.25, 10);
    registerCoinComponent("coinDime", 0.1, 10);
    registerCoinComponent("coinNickel", 0.05, 10);
    registerCoinComponent("coinPenny", 0.01, 10);

})();