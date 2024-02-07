import React from "react";

const Button = ({ bgColor, name, children, onClick,cols="col-span-1" }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
      }}
      className={`${cols} border !border-[#464647] text-white w-full py-1.5 text-[30px]`}
      name={name}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const KeyPadComponent = ({ onClick }) => {
  return (
    <div className="w-full grid grid-cols-4 bg-[#1E1E2D]">
      <Button
        bgColor={"#FF9F0A"}
        name={"/"}
        onClick={(e) => onClick(e.target.name)}
      >
        ÷
      </Button>

      <Button
        bgColor={"#1E1E2D"}
        name="%"
        onClick={(e) => onClick(e.target.name)}
      >
        %
      </Button>
      <Button
        bgColor={"#1E1E2D"}
        name="."
        onClick={(e) => onClick(e.target.name)}
      >
        .
      </Button>
      <Button
        bgColor={"#1E1E2D"}
        name="AC"
        onClick={(e) => onClick(e.target.name)}
      >
        AC
      </Button>

      <Button
        bgColor={"#FF9F0A"}
        name="*"
        onClick={(e) => onClick(e.target.name)}
      >
        x
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="9"
        onClick={(e) => onClick(e.target.name)}
      >
        9
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="8"
        onClick={(e) => onClick(e.target.name)}
      >
        8
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="7"
        onClick={(e) => onClick(e.target.name)}
      >
        7
      </Button>

      <Button
        bgColor={"#FF9F0A"}
        name="-"
        onClick={(e) => onClick(e.target.name)}
      >
        -
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="6"
        onClick={(e) => onClick(e.target.name)}
      >
        6
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="5"
        onClick={(e) => onClick(e.target.name)}
      >
        5
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="4"
        onClick={(e) => onClick(e.target.name)}
      >
        4
      </Button>

      <Button
        bgColor={"#FF9F0A"}
        name="+"
        onClick={(e) => onClick(e.target.name)}
      >
        +
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="3"
        onClick={(e) => onClick(e.target.name)}
      >
        3
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="2"
        onClick={(e) => onClick(e.target.name)}
      >
        2
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="1"
        onClick={(e) => onClick(e.target.name)}
      >
        1
      </Button>

      <Button
        bgColor={"#FF9F0A"}
        name="="
        onClick={(e) => onClick(e.target.name)}
      >
        =
      </Button>
      <Button
        bgColor={"#1E1E2D"}
        name="."
        onClick={(e) => onClick(e.target.name)}
      >
        .
      </Button>
      <Button
        bgColor={"#2B2B40"}
        name="0"
        onClick={(e) => onClick(e.target.name)}
        cols="col-span-2"
      >
        0
      </Button>
    </div>
  );
};

export default KeyPadComponent;

/**
<div className="button">
      <button name="(" onClick={e => onClick(e.target.name)}>(</button>
      <button name="CE" onClick={e => onClick(e.target.name)}>CE</button>
      <button name=")" onClick={e => onClick(e.target.name)}>)</button>
      <button name="C" onClick={e => onClick(e.target.name)}>C</button><br/>






      

      
      <button name="0" onClick={e => onClick(e.target.name)}>0</button>
      <button name="=" onClick={e => onClick(e.target.name)}>=</button>
      <button name="/" onClick={e => onClick(e.target.name)}>÷</button><br/>
    </div>
 */
