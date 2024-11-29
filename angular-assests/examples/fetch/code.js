async function getAll() {
    const init = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    const response = await fetch("http://localhost:8080/sighting", init);
    if (response.status !== 200) {
        console.log(`Bad status: ${response.status}`);
        return Promise.reject("response is not 200 OK");
    }
    const json = await response.json();

    let html = "";
    for (const sighting of json) {
        html += `<div><strong>${sighting.bugType}</strong> ${sighting.description}</div>`
    }
    document.getElementById("results").innerHTML = html;
}

async function getById() {

    const init = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    // includes a sightingId
    const response = await fetch("http://localhost:8080/sighting/12", init);
    if (response.status === 404) {
        console.log("That sighting doesn't exist.");
        return;
    }
    else if (response.status !== 200) {
        console.log(`Bad status: ${response.status}`);
        return Promise.reject("response is not 200 OK");
    }
    const json = await response.json();
    console.log(json);
}

async function post() {

    const sighting = {
        "bugType": "Mosquito",
        "description": "mosquitos are jerks",
        "date": "2020-08-04",
        "order": "Diptera",
        "interest": 0.0
    };

    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(sighting)
    };

    const response = await fetch("http://localhost:8080/sighting", init);
    if (response.status !== 201) {
        console.log("Failed to save the sighting.");
        return Promise.reject("response is not 200 OK");
    }
    const json = await response.json();
    console.log(json);
}

async function put() {

    const sighting = {
        "sightingId": 4,
        "bugType": "Mosquito",
        "description": "mosquitos are jerks",
        "date": "2020-08-04",
        "order": "Diptera",
        "interest": 0.0
    };

    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(sighting)
    };

    const response = await fetch("http://localhost:8080/sighting/4", init);

    if (response.status === 404) {
        console.log("Sighting not found.");
    } else if (response.status === 204) {
        console.log("Sighting updated!");
    } else {
        console.log(`Sighting id ${sighting.sightingId} update failed with status ${response.status}.`);
    }
}

// `delete` is a JavaScript keyword
// so we use `doDelete` instead
async function doDelete() {
    const response = await fetch("http://localhost:8080/sighting/4", { method: "DELETE" });
    if (response.status === 204) {
        console.log("Delete success.");
    } else if (response.status === 404) {
        console.log("Sighting not found.");
    } else {
        console.log(`Delete failed with status: ${response.status}`);
    }
}