import React from 'react'
import Header from '../components/Header'
import { Main } from '../components/main'

const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col`,
}
const Home = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
    </div>
  )
}

export default Home
