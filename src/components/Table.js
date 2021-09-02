import React from 'react';
import MaterialTable from 'material-table';

const Table = (props) => {
    
    const columns = [
        {
            title:'ID',
            field:'id'
        },
        {
            title:'Name',
            field:'name'
        },
        {
            title:'Mode',
            field:'mode'
        },
        {
            title:'Type',
            field:'type'
        },
        {
            title:'Destination',
            field:'destination'
        },
        {
            title:'Origin',
            field:'origin'
        },
        {
            title:'Total',
            field:'total'
        },
        {
            title:'Status',
            field:'status'
        },
        {
            title:'User ID',
            field:'userId'
        }
    ]
    return (
        <div>
            <MaterialTable 
            data={props?.tableData}
            columns={columns}
            options={{
                filtering:true,
                exportButton:true
            }}
            
            />

            
        </div>
    )
}

export default Table
