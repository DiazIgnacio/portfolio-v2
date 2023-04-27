import React, { useState, useEffect, ReactNode } from 'react'
import FullScreenSpinner from 'src/components/Spinner'

const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <FullScreenSpinner isOpen={loading} />
      <div
        className={`
       transition-opacity duration-700
        ${loading ? 'opacity-0' : 'opacity-100'}
      `}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
