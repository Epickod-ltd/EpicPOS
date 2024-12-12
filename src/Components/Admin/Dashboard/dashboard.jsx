import React from 'react'
import IncomeDetails from '../IncomeDetails/IncomeDetails'
import History from '../historyDetails/historyDetails'

function Dashboard() {
  return (
      <div className="space-y-6 p-6">
          <h1 className="font-bold mb-4 text-lg">Dashboard</h1>
          <IncomeDetails/>
          <History/>
      </div>
  )
}

export default Dashboard

