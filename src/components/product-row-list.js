import {
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Message } from "./message";
import { ProductRow } from "./product-row";
import "./product-row-list.scss";

export function ProductRowList({ products = [], loading = false }) {
  function renderProducts(products) {
    if (products.length) {
      return (
        <TableContainer className="product-row-list__products">
          <Table variant="striped" colorScheme="cyan">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => {
                return (
                  <ProductRow key={`product__${product.id}`} {...product} />
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Product</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Total</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      );
    }
  }

  return (
    <section className="product-row-list">
      {renderProducts(products)}
      {!loading && !products.length ? (
        <Message
          className="product-row-list__empty-list-message"
          content="Su carrito esta vacio :(. Mire el panel principal, muchos productos lo estan esperando"
          type="info"
        />
      ) : null}
    </section>
  );
}
