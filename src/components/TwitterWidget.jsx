import React from 'react';
import '../styles/TwitterWidget.css'

function TwitterWidget({ children }) {
  return (
    <div className="tw-Widget-Container">
      <strong className='tw-Widget-Title'>Who to follow</strong>
      {children}
      <span className='tw-Widget-Footer'>Show more</span>
    </div>
  );
}

export { TwitterWidget };