import React, { useState, useEffect, ReactNode } from 'react'
import FullScreenSpinner from 'src/components/Spinner'

const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <FullScreenSpinner isOpen={loading} />
      <div
        className={`
       transition-opacity duration-700
        ${loading ? 'invisible opacity-0' : 'visible opacity-100'}
      `}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
