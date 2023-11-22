import React from 'react';
import ChatBox from '../components/ChatBox';
export default function HomePage() {
  return (
    <div className="justify-content-center">
      <h1 className="content-h1">Home Page</h1>
      <div className="flex">
        <div className="content-h2">Your Content</div>
      </div>
      <ChatBox />
    </div>
  );
}
