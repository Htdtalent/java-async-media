import React from 'react';
import SightingCard from './SightingCard';

function SightingsView(props) {

    return (
        <div className="row row-cols-3">
            {props.sightings.map(s =>
                <SightingCard
                    key={s.sightingId}
                    className="col mb-3"
                    sighting={s}
                    activateLayout={props.activateLayout}
                />
            )}
        </div>
    );
}

export default SightingsView;