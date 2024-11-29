const apiUrl = "http://localhost:8080/sighting"

function findAll() {
    return fetch(apiUrl)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject("response is not 200 OK");
            }
            return response.json();
        });
}

function add(sighting) {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sighting)
    };

    return fetch(apiUrl, init)
        .then(response => {
            if (response.status !== 201) {
                return Promise.reject("response not 201 CREATED");
            }
        });
}

function update(sighting) {
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sighting)
    };

    // PUT needs a sightingId in the URL
    return fetch(`${apiUrl}/${sighting.sightingId}`, init)
        .then(response => {
            if (response.status !== 204) {
                return Promise.reject("response not 204 NO CONTENT");
            }
        });
}

function save(sighting) {
    let promise;
    if (sighting.sightingId > 0) {
        promise = update(sighting);
    } else {
        promise = add(sighting);
    }
    // Chain the findAll to the end!
    return promise.then(() => findAll());
}

function deleteById(sightingId) {
    const init = { method: "DELETE" };

    return fetch(`${apiUrl}/${sightingId}`, init)
        .then(response => {
            if (response.status !== 204) {
                return Promise.reject("response not 204 NO CONTENT");
            }
        })
        .then(() => findAll());
}

export default {
    findAll,
    save,
    deleteById
};