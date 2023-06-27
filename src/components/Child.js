import React from "react";

function Child({ loggedIn, change }) {
  return (
    <div className="child">
      {!loggedIn ? (
        <form>
          <label>Username:</label>
          <input type="text" />
          <label>Password:</label>
          <input type="password" />
          <button onClick={()=>change(true)}>Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
}

export default Child;
