import React, { useState } from 'react'
import '../styles/TwitterCard.css'

function TwitterCard({ userName, name, initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const isFollowingButton = isFollowing ? 
    "tw-Card-Aside-Follow-Button": 
    "tw-Card-Aside-Following-Button";
  
  const text = isFollowing? "Follow": "Following";

  function handleFollowing() {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className='tw-Card'>
      <header className='tw-Card-Header'>
        <img src={`https://unavatar.io/${userName}`} className="tw-Card-Img" alt="Twitter user name avatar" />
        <div className="tw-Card-Info">
          <strong className='tw-Card-Name'>{name}</strong>
          <span className='tw-Card-userName'>{`@${userName}`}</span>
        </div>
      </header>
      <aside className='tw-Card-Aside'>
        <button className={isFollowingButton} onClick={handleFollowing}>
          <span className="tw-Card-Button-Text-Following">{text}</span>
          <span className='tw-Card-Button-Stop-Following'>Stop following</span>
        </button>
      </aside>
    </article>
  )
}

export { TwitterCard };