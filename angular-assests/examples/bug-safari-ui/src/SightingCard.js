import React from 'react';

function SightingCard(props) {

    const sighting = props.sighting;

    function handleUpdate(e) {
        e.preventDefault();
        props.activateLayout("update", sighting);
    }

    function handleDelete(e) {
        e.preventDefault();
        props.activateLayout("delete", sighting);
    }

    return (
        <div className={props.className}>
            <div className="card">
                {sighting.imageUrl && <img className="card-img-top"
                    src={sighting.imageUrl} alt={sighting.bugType} />}
                <div className="card-body">
                    <h4 className="card-title">{sighting.bugType}</h4>
                    <p className="card-text">
                        <strong>Order:</strong> {sighting.order}
                    </p>
                    <p className="card-text">
                        {sighting.description}
                    </p>
                    <p className="card-text">
                        <time dateTime={sighting.date}>{sighting.date}</time>
                    </p>
                    <p className="card-text">
                        <strong>Interest:</strong> {sighting.interest}
                    </p>
                </div>
                <footer className="card-footer">
                    <div className="row justify-content-center">
                        <a href="#edit" className="mr-4" onClick={handleUpdate}>Edit</a>
                        <a href="#delete" onClick={handleDelete}>Delete</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default SightingCard;