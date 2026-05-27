import React from 'react'
import DefaultLayout from '../../layouts/defaultLayout'
import MainComponents from '../../views/mainComponents'

function Main() {
    
  return (
    <DefaultLayout>
      <main className="main">
        <MainComponents/>
      </main>
    </DefaultLayout>
  )
}

export default Main