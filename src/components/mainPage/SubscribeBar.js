import React from 'react';

import '../../styles/css/mainSubscribeBar.css';

const SubscribeBar = () => (
  <form
    className="subscribe"
    // action=""
    // method="POST"
  >
    <input
      className="subscribe__input"
      type="email"
      placeholder="Enter your email"
    />
    <button
      className="subscribe__button"
      type="submit"
    >
      Subscribe
    </button>
  </form>
)

export default SubscribeBar;

