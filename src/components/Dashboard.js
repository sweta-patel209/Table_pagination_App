import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Container } from 'semantic-ui-react';

//components
import Table from './Table';


const Dashboard = () => {
    const [tableData, setTableData] = useState(null);
    const history = useHistory();
    useEffect(() => {
        getAllShipmentData();
    }, [])

    const getAllShipmentData = async () => {
        let shipment = [];
        try {
            let response = await axios.get(
                ` http://localhost:5000/shipments`
            );
            let shipmentData = response.data

            for (let i = 0; i < shipmentData.length; i++) {
                shipment.push({
                    id: shipmentData[i]?.id,
                    name: shipmentData[i].name,
                    mode: shipmentData[i].mode,
                    type: shipmentData[i].type,
                    destination: shipmentData[i].destination,
                    origin: shipmentData[i].origin,
                    total: shipmentData[i].total,
                    status: shipmentData[i].status,
                    userId: shipmentData[i].userId
                });
            }
            setTableData(shipment)
        } catch (error) {
            console.log('error while fetching Users data', error);
        }
    }
    return (
        <div>
            
                <button className="ui button addBtn" onClick={() => { history.push('/AddNewShipment') }}>Add New Shipment</button>
           
                {tableData &&
                    <Table tableData={tableData} />}
            

        </div>
    )
}

export default Dashboard
