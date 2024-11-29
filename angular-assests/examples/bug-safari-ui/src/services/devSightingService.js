const testData = [
    {
        "sightingId": 1,
        "bugType": "Ladybug",
        "order": "Coleptera",
        "description": "mature ladybug in the grass",
        "date": "2020-10-05",
        "interest": 5.5,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coccinella_magnifica01.jpg/640px-Coccinella_magnifica01.jpg"
    },
    {
        "sightingId": 2,
        "bugType": "Cicadas",
        "order": "Hemiptera",
        "description": "the cicadas are singing in the trees",
        "date": "2020-10-06",
        "interest": 7.0,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Neotibicen_linnei.jpg/536px-Neotibicen_linnei.jpg"
    },
    {
        "sightingId": 3,
        "bugType": "Darkling Beetle",
        "order": "Coleptera",
        "description": "found an interesting beetle crawling in the compost",
        "date": "2020-10-07",
        "interest": 9.75,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Darkling_beetle.jpg/640px-Darkling_beetle.jpg"
    },
    {
        "sightingId": 4,
        "bugType": "Grasshopper",
        "order": "Orthoptera",
        "description": "jumping around in the grass",
        "date": "2020-10-07",
        "interest": 9.75,
        "imageUrl": ""
    }
];

const LAG = 1000;

function findAll() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(testData);
        }, LAG);
    });
}

function update(sighting) {
    let index = -1;
    testData.forEach((s, i) => {
        if (s.sightingId === sighting.sightingId) {
            index = i;
        }
    });

    if (index >= 0) {
        testData[index] = sighting;
    }
}

function save(sighting) {

    if (sighting.sightingId > 0) { // update
        update(sighting);
    } else {
        testData.push(sighting);
    }

    return findAll();
}

function deleteById(sightingId) {

    let index = -1;
    testData.forEach((s, i) => {
        if (s.sightingId === sightingId) {
            index = i;
        }
    });

    if (index >= 0) {
        testData.splice(index, 1);
    }

    return findAll();
}

export default {
    findAll,
    save,
    deleteById
};