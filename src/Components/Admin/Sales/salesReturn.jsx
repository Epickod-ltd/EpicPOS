import React, {useState} from "react";
import ReturnsSearchInput from './ReturnsComponents/ReturnsSearchInput';
import ReturnsSalesTable from './ReturnsComponents/ReturnsSalesTable';
import ReturnSalesAction from './ReturnsComponents/ReturnSalesAction';
const Returns = () => {
    return (
        <div className="p-6">
            <div>
                <h1 className="font-bold tracking-wide text-2xl text-gray-800">
                    Sales Returns
                </h1>
            </div>
            <ReturnsSearchInput />

            <div className="mt-4">
                <ReturnsSalesTable/>
            </div>

            <ReturnSalesAction/>

        </div>


    );
};

export default Returns;
