import React, {useState} from "react";
import ReturnsSearchInput from './ReturnsComponents/ReturnsSearchInput';
import ReturnsSalesTable from './ReturnsComponents/ReturnsSalesTable';
import ReturnSalesAction from './ReturnsComponents/ReturnSalesAction';
const Returns = () => {
    return (
        <div className="p-6">
            <div>
                <h1 className="font-bold mb-4 text-lg">Sales Returns</h1>
            </div>
            <ReturnsSearchInput/>

            <div className="mt-4">
                <ReturnsSalesTable/>
            </div>

            <ReturnSalesAction/>

        </div>


    );
};

export default Returns;
