const errorPanel = document.getElementById("errorPanel");
const resultPanel = document.getElementById("resultPanel");

function calculate(evt) {
    evt.preventDefault();

    errorPanel.classList.add("d-none");
    resultPanel.classList.add("d-none");

    const errs = [];
    let min = getWholeNumber("min", "Minimum", errs);
    let max = getWholeNumber("max", "Maximum", errs);

    if (errs.length > 0) {
        displayErrors(errs);
        return;
    }

    if (min > max) {
        errs.push("Minimum is larger than Maximum.");
        displayErrors(errs);
        return;
    }

    const values = makeNumberArray(min, max);
    const sum = sumArray(values);

    document.getElementById("sum").innerText = sum;
    document.getElementById("values").innerText = values;

    resultPanel.classList.remove("d-none");
}

function getWholeNumber(id, name, errs) {
    let result = document.getElementById(id).value.trim();
    if (result.length === 0) {
        errs.push(`${name} is required.`);
        return;
    }

    result = parseFloat(result);
    if (isNaN(result)) {
        errs.push(`${name} is not a number.`);
        return;
    }

    return Math.round(result);
}

function displayErrors(errs) {
    let html = "<ul>";
    for (let i = 0; i < errs.length; i++) {
        html += `<li>${errs[i]}</li>`;
    }
    html += "</ul>";
    errorPanel.innerHTML = html;
    errorPanel.classList.remove("d-none");
}

function makeNumberArray(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

function sumArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}