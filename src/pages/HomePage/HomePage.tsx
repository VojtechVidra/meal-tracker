import React from "react";
import ContentEditable from "react-contenteditable";

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <div style={{ display: "flex" }}>
        <ContentEditable onChange={console.log} html="pepa" />
        <div>test</div>
      </div>
    </>
  );
};
