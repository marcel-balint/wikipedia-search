import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [inputValid, setInputValid] = useState(true);

  const handleInput = (e) => {
    setInputVal(e.target.value);
    setInputValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputVal ? props.form(inputVal.toLowerCase()) : setInputValid(false),
      setInputVal("");
  };

  console.log(inputValid);
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className={!inputValid ? "err" : ""}
          type="text"
          onInput={handleInput}
          value={inputVal}
          placeholder="Type your search"
        />
        <input type="submit" value="Search" />
        {!inputValid ? (
          <p>
            {" "}
            <i
              style={{
                color: "red",
                fontSize: " small",
                display: "block",
                marginTop: "-13px",
                marginLeft: "-75px",
              }}
            >
              No empty field allowed!
            </i>
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default SearchBar;
