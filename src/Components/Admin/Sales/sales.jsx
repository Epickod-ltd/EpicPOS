import React, {useState} from "react";
import SearchInput from './SalesComponents/SearchInput';
import SalesTable from './SalesComponents/SalesTable';
import SalesAction from './SalesComponents/SalesAction';
const Sales = () => {
    return (
        <div className="p-6">
            <div>
                <h1 className="font-bold tracking-wide text-2xl text-gray-800">
                    Sales
                </h1>
            </div>
            <SearchInput/>

            <div className="mt-4">
                <SalesTable/>
            </div>

            <SalesAction/>

        </div>


    );
};

export default Sales;