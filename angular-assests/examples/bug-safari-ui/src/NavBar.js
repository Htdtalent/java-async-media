import React from 'react';

function makeNewSighting() {
    return {
        "sightingId": 0,
        "bugType": "",
        "order": "",
        "description": "",
        "date": "",
        "interest": 5.0,
        "imageUrl": ""
    };
}

function NavBar(props) {

    function handleAdd() {
        props.activateLayout("add", makeNewSighting());
    }

    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Bug Safari</h1>
            <ul className={props.layout === "home" ? "navbar-nav" : "invisible"}>
                <div className="nav-item">
                    <button onClick={handleAdd}
                        className="btn btn-light">Add Sighting</button>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;