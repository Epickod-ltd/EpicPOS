import React from 'react'
import IncomeDetails from '../IncomeDetails/IncomeDetails'
import History from '../historyDetails/historyDetails'

function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <IncomeDetails />
      <History />
    </div>
  )
}

export default Dashboard

