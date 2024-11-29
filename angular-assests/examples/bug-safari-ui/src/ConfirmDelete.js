import React from 'react';

function ConfirmDelete(props) {

    const sighting = props.sighting;

    function handleDelete(e) {
        e.preventDefault();
        props.deleteById(sighting.sightingId);
    }

    function handleCancel(e) {
        e.preventDefault();
        props.activateLayout("home");
    }

    return (
        <div>
            <h3>Are You Sure?</h3>
            <p className="alert alert-danger">
                Do you really want to delete this sighting? Deletions are permanent.
            </p>
            <p>
                <label>Bug Type</label>
                <span className="form-control">{sighting.bugType}</span>
            </p>
            <p>
                <label>Order</label>
                <span className="form-control">{sighting.order}</span>
            </p>
            <p>
                <label>Date</label>
                <span className="form-control">{sighting.date}</span>
            </p>
            <p>
                <label>Description</label>
                <span className="form-control">{sighting.description}</span>
            </p>
            <div>
                <button onClick={handleDelete} className="btn btn-danger mr-2">Delete Forever</button>
                <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmDelete;