import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../navbar.js";
import "@testing-library/jest-dom";

test("render content", () => {
  const component = render(
    <h1>
      <Navbar />
    </h1>
  );
  const title = component.container.querySelector(".navbar__shop-header");

  expect(title).toHaveTextContent("MyShop");
});
