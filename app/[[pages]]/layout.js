import React from 'react'

const Layout = ({children}) => {
  return (
    <NFTMarketContext.Provider value={{data: "hello"}}>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>
      <p>Top</p>

      {children}
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </NFTMarketContext.Provider>
  )
}

export default Layout
