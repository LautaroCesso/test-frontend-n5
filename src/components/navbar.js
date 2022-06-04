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
      <Heading
        className="navbar__shop-header"
        onClick={() => pushLocation("/")}
      >
        MyShop
      </Heading>
      <section className="navbar__buttons">
        {path !== "/add-product" ? (
          <Button
            className="navbar__buttons__add-new-product-button"
            rightIcon={<MdPostAdd />}
            leftIcon={<MdPostAdd />}
            variant="outline"
            colorScheme="purple"
            onClick={() => pushLocation("/add-product")}
          >
            Publicar un nuevo producto
          </Button>
        ) : null}
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
