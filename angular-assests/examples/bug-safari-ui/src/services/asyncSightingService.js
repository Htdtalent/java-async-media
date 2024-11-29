const apiUrl = "http://localhost:8080/sighting"

async function findAll() {
    const response = await fetch(apiUrl);

    if (response.status !== 200) {
        return Promise.reject("response is not 200 OK");
    }

    return response.json();
}

async function add(sighting) {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sighting)
    };

    const response = await fetch(apiUrl, init);

    if (response.status !== 201) {
        return Promise.reject("response not 201 CREATED");
    }
}

async function update(sighting) {
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sighting)
    };

    // PUT needs a sightingId in the URL
    const response = await fetch(`${apiUrl}/${sighting.sightingId}`, init);

    if (response.status !== 204) {
        return Promise.reject("response not 204 NO CONTENT");
    }
}

async function save(sighting) {

    if (sighting.sightingId > 0) {
        await update(sighting);
    } else {
        await add(sighting);
    }
    // return the findAll promise.
    return findAll()
}

async function deleteById(sightingId) {
    const init = { method: "DELETE" };

    const response = await fetch(`${apiUrl}/${sightingId}`, init);

    if (response.status !== 204) {
        return Promise.reject("response not 204 NO CONTENT");
    }

    // return the findAll promise.
    return findAll()
}

export default {
    findAll,
    save,
    deleteById
};