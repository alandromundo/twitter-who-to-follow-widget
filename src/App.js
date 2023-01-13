import "./App.css";
import React from "react";
import { TwitterCard } from "./components/TwitterCard";
import { TwitterWidget } from "./components/TwitterWidget";

function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      userName: "BaityBait",
      name: "BaityBait",
      isFollowing: true,
    },
  ];

  return (
    <div className="App">
      <TwitterWidget>
        <ul className="TwitterListCard">
          {users.map(({ userName, name, isFollowing }) => (
            <TwitterCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            />
          ))}
        </ul>
      </TwitterWidget>
    </div>
  );
}

export default App;
