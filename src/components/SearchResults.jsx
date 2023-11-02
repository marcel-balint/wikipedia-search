import React from "react";

const SearchResults = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {props.term && (
        <p>
          Results based on your search :{" "}
          <strong>
            {" "}
            <i>{props.term}</i>
          </strong>
        </p>
      )}
      {props.searchResult.search?.map((el) => (
        <a
          href={`https://en.wikipedia.org/wiki/${props.term}`}
          key={el.pageid}
          target="_blank"
        >
          {el.title}
        </a>
      ))}
    </div>
  );
};

export default SearchResults;
