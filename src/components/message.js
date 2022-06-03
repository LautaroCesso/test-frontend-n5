import React from "react";
import "./message.scss";

export function Message({ content, type }) {
  return (
    <span className={`message ${type === "success" ? "success" : "error"}`}>
      {content}
    </span>
  );
}
