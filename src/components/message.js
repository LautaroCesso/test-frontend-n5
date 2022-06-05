import React from "react";
import "./message.scss";

export function Message({ content, type }) {
  const classByType = {
    error: "error",
    success: "success",
    info: "info",
  };

  const additionalClass = classByType[type] ? classByType[type] : "";

  return <span className={`message ${additionalClass}`}>{content}</span>;
}
