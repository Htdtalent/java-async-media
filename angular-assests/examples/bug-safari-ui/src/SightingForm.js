import React, { useState } from 'react';

function SightingForm(props) {

    const [bugType, setBugType] = useState(props.sighting.bugType);
    const [order, setOrder] = useState(props.sighting.order);
    const [description, setDescription] = useState(props.sighting.description);
    const [date, setDate] = useState(props.sighting.date);
    const [interest, setInterest] = useState(props.sighting.interest);
    const [imageUrl, setImageUrl] = useState(props.sighting.imageUrl);

    function handleSubmit(e) {
        e.preventDefault();
        props.save({
            "sightingId": props.sighting.sightingId || 0,
            "bugType": bugType,
            "order": order,
            "description": description,
            "date": date,
            "interest": interest,
            "imageUrl": imageUrl
        });
    }

    function handleHome(e) {
        e.preventDefault();
        props.activateLayout("home");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{props.layout === "add" ? "Add A Sighting" : "Update A Sighting"}</h2>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="txtBugType">Bug Type</label>
                    <input type="text" className="form-control" id="txtBugType" required
                        value={bugType} onChange={(e) => setBugType(e.target.value)} />
                </div>
                <div className="form-group col">
                    <label htmlFor="ddlOrder">Order</label>
                    <select id="ddlOrder" className="form-control" required
                        value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="">-- Choose --</option>
                        <option value="Coleptera">Coleptera (beetles)</option>
                        <option value="Lepidoptera">Lepidoptera (butterflies, moths)</option>
                        <option value="Hymenoptera">Hymenoptera (ants, bees, wasps)</option>
                        <option value="Diptera">Diptera (flies, gnats, mosquitoes)</option>
                        <option value="Orthoptera">Orthoptera (grasshoppers, crickets)</option>
                        <option value="Hemiptera">Hemiptera ("true bugs", cicadas, aphids)</option>
                        <option value="Odonata">Odonata (dragonflies, damselflies)</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="txtDescription">Description</label>
                <textarea className="form-control" id="txtDescription" required
                    value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="txtDate">Date</label>
                    <input type="date" className="form-control" id="txtDate" required
                        value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group col">
                    <label htmlFor="txtInterest">Interest</label>
                    <input type="number" className="form-control" id="txtInterest" min="0.00" step="0.01" required
                        value={interest} onChange={(e) => setInterest(parseFloat(e.target.value))} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="txtImageURL">Image URL</label>
                <input type="url" className="form-control" id="txtImageURL"
                    value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div>
                <button type="submit" className="btn btn-primary mr-2">Save</button>
                <button onClick={handleHome} className="btn btn-secondary">Cancel</button>
            </div>
        </form>
    );
}

export default SightingForm;