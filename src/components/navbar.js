import { Button, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "wouter";
import ToggleColorMode from "./toggle-color-mode";
import "./navbar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

export function Navbar() {
  const [path, pushLocation] = useLocation();
  const { colorMode } = useColorMode();

  return (
    <nav className={`navbar ${colorMode === "dark" ? colorMode : ""}`}>
      <Heading>Productos</Heading>
      <section className="navbar__buttons">
        <Button
          rightIcon={<MdPostAdd />}
          leftIcon={<MdPostAdd />}
          variant="outline"
          onClick={() => pushLocation("/add-product")}
        >
          Publicar un nuevo producto
        </Button>
        <ToggleColorMode />
        <IconButton
          className="navbar__buttons__cart-button"
          aria-label="Go to cart panel button"
          variant="outline"
          colorScheme="red"
          onClick={() => pushLocation("/cart")}
          icon={<FaShoppingCart />}
        />
      </section>
    </nav>
  );
}
