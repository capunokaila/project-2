import React from 'react'
import TopNavBarTwo from '../components/TopNavBarTwo';
import Profile from '../components/Profile';
import BotNavBarTwo from '../components/BotNavBarTwo';

function UserPosts() {
  return (
    <main className="flex">
      {/* Top Navigation Bar Two */}
      <TopNavBarTwo />

      {/* Profile */}
      <Profile />

      {/* Bot Navigation Bar Two */}
      <BotNavBarTwo />
    </main>
  );
}

export default UserPosts