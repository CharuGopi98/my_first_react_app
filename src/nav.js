import React from "react";

const Nav = () => {
  const message = {
    one: "world",
    two: "charu",
  };
  const [state, setState] = React.useState(`Hello ${message.one}`);
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState(`Hello ${message.two}`);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Nav;
