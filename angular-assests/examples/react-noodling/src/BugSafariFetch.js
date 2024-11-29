import { useState, useEffect } from 'react';

function BugSafariFetch() {

    const [sightings, setSightings] = useState([]);

    useEffect(() => {

        console.log("use effect", new Date());

        fetch("http://localhost:8080/sighting")
            .then(response => {
                if (response.status !== 200) {
                    return Promise.reject("sightings fetch failed")
                }
                return response.json();
            })
            .then(json => setSightings(json))
            .catch(console.log);

    }, []);

    const add = () => {

        const sighting = {
            "bugType": `Mosquito #${Math.floor(Math.random() * 10000)}`,
            "description": "mosquitos are jerks",
            "date": "2021-01-01",
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

        fetch("http://localhost:8080/sighting", init)
            .then(response => {
                if (response.status !== 201) {
                    return Promise.reject("response is not 200 OK");
                }
                return response.json();
            })
            .then(json => setSightings([...sightings, json]))
            .catch(console.log);
    };

    const deleteById = (sightingId) => {
        fetch(`http://localhost:8080/sighting/${sightingId}`, { method: "DELETE" })
            .then(response => {
                if (response.status === 204) {
                    setSightings(sightings.filter(s => s.sightingId !== sightingId));
                } else if (response.status === 404) {
                    return Promise.reject("sighting not found");
                } else {
                    return Promise.reject(`Delete failed with status: ${response.status}`);
                }
            })
            .catch(console.log);
    };

    return (
        <div>
            <button onClick={add}>Add Random Sighting</button>
            <table>
                <thead>
                    <tr>
                        <th>Bug Type</th>
                        <th>Order</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sightings.map(s => (
                        <tr key={s.sightingId}>
                            <td>{s.bugType}</td>
                            <td>{s.order}</td>
                            <td>{s.description}</td>
                            <td>{s.date}</td>
                            <td><button onClick={() => deleteById(s.sightingId)}>Delete</button></td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BugSafariFetch;