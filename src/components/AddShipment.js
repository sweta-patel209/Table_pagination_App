import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const AddShipment = () => {
    const history = useHistory();
    const [id, setId] = useState('')
    const [sname, setSname] = useState('')
    const [mode, setMode] = useState('')
    const [type, setType] = useState('')
    const [destination, setDestination] = useState('')
    const [origin, setOrigin] = useState('');
    const [total, setTotal] = useState('');
    const [status, setStatus] = useState('');
    const [userId, setUserId] = useState('');
    const [cargoType, setCargoType] = useState('');
    const [cargoDesc, setCargoDesc] = useState('');
    const [cargoVol, setCargoVol] = useState('');
    const [serviceType, setServiceType] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        const params = {
            id: id,
            name: sname,
            cargo: {
                type: cargoType,
                description: cargoDesc,
                volume: cargoVol
            },
            mode: mode,
            type: type,
            destination: destination,
            origin: origin,
            total: total,
            services: {
                type: serviceType
            },
            status: status,
            userId: userId
        }
        let res = await axios.post(`http://localhost:5000/shipments`, params)
        setId('');
        setSname('');
        setMode('');
        setType('');
        setDestination('');
        setOrigin('');
        setTotal('');
        setStatus('');
        setUserId('');
        setCargoVol('');
        setCargoType('');
        setCargoDesc('');
        setServiceType('');

    }

    const GoToHomePage = () => {
        history.push('/')
    }

    return (
        <div>
            <Container>
                <h3>Add Shipment New Details</h3>
                <form className="ui form" onSubmit={onSubmit}>
                    <div className="field">
                        <label>Shipment Id</label>
                        <input
                            type='text'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Enter Shipment Id"
                        />
                    </div>
                    <div className="field">
                        <label>Shipment Name</label>
                        <input
                            type='text'
                            value={sname}
                            onChange={(e) => setSname(e.target.value)}
                            placeholder="Enter Shipment Name"
                        />
                    </div>
                    <div className="field">
                        <label>Mode</label>
                        <input
                            type='text'
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            placeholder="Mode"
                        />
                    </div>
                    <div className="field">
                        <label>Type</label>
                        <input
                            type='text'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Type"
                        />
                    </div>
                    <div className="field">
                        <label>Destination</label>
                        <input
                            type='text'
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="Destionation"
                        />
                    </div>
                    <div className="field">
                        <label>Origin</label>
                        <input
                            type='text'
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            placeholder="Origin"
                        />
                    </div>
                    <div className="field">
                        <label>Total</label>
                        <input
                            type='text'
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            placeholder="Total"
                        />
                    </div>
                    <div className="field">
                        <label>Status</label>
                        <input
                            type='text'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            placeholder="Status"
                        />
                    </div>
                    <div className="field">
                        <label>User ID</label>
                        <input
                            type='text'
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            placeholder="User Id"
                        />
                    </div>
                    <div className="field">
                        <label>Cargo Type</label>
                        <input
                            type='text'
                            value={cargoType}
                            onChange={(e) => setCargoType(e.target.value)}
                            placeholder="Cargo Type"
                        />
                    </div>
                    <div className="field">
                        <label>Cargo Description</label>
                        <input
                            type='text'
                            value={cargoDesc}
                            onChange={(e) => setCargoDesc(e.target.value)}
                            placeholder="Cargo Description"
                        />
                    </div>
                    <div className="field">
                        <label>Cargo Volume</label>
                        <input
                            type='text'
                            value={cargoVol}
                            onChange={(e) => setCargoVol(e.target.value)}
                            placeholder="Cargo volume"
                        />
                    </div>
                    <div className="field">
                        <label>Service Type</label>
                        <input
                            type='text'
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            placeholder="Mode"
                        />
                    </div>

                    <button className="ui button" type="submit">Submit</button>
                    <buttong className="ui button" onClick={GoToHomePage}>Back to Home</buttong>
                </form>
            </Container>
        </div>
    )
}

export default AddShipment
