import React from "react";

function Child({ loggedIn, change }) {
  return (
    <div className="child">
      {!loggedIn ? (
        <>
          <label>Username:</label>
          <input type="text" />
          <label>Password:</label>
          <input type="password" />
          <button onClick={()=>change(true)}>Login</button>
        </>
      ) : (
        <p>you are logged in!</p>
      )}
    </div>
  );
}

export default Child;
