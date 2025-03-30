import React from 'react'

import Headers from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Headers  />
      <Outlet />

      <Footer />
    </div>
  )
}

export default AppLayout
