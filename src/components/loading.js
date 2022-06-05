import React from "react";
import { Spinner } from "@chakra-ui/react";
import "./loading.scss";

export function Loading() {
  return (
    <div className="loading">
      <Spinner thickness="3px" speed="0.75s" color="blue.600" size="xl" />
    </div>
  );
}