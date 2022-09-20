import React from 'react'
import TopNavBarOne from '../components/TopNavBarOne'
import Feed from '../components/Feed'
import Side from '../components/Side'
import BotNavBarOne from '../components/BotNavBarOne'
import Login from '../authentication/Login'
import Signup from '../authentication/Signup'

function Home() {
  return (
    <main className="flex">
      {/* Top Navigation Bar One */}
      <TopNavBarOne />

      {/* Feed */}
      <Feed />

      {/* Side */}
      <Side />

      {/* Bottom Navigation Bar One */}
      <BotNavBarOne />

      {/* Login */}
      {/* <Login /> */}

      {/* Signup */}
      {/* <Signup /> */}
    </main>
  )
}

export default Home