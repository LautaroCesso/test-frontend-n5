import React, { useEffect } from "react";
import { ProductRowList } from "../components/product-row-list";
import { useDispatch, useSelector } from "react-redux";
import { clearCartProducts } from "../slices/cartSlice";
import { setProducts } from "../slices/productsSlice";
import axios from "../apis/products-api";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { Button, Text, useToast } from "@chakra-ui/react";
import { AiOutlineClear } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import "./cart-panel.scss";
import { Loading } from "../components/loading";

export function CartPanel() {
  const products = useSelector((state) => state.cart.products);
  const toast = useToast();
  const [productsFromApi, error, loading, axiosFetch] = useAxiosFunction();
  const total = products.reduce((total, product) => {
    total += product.price * product.amountToAddToCart;

    return total;
  }, 0);

  const dispatch = useDispatch();

  function clearCart() {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: "/products",
    }).then(() => {
      dispatch(clearCartProducts());
      toast({
        title: "Su carrito se ha vaciado con exito. :)",
        description:
          "Vuelva al panel principal, muchos productos lo estan esperando.",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    });
  }

  async function buyProducts() {
    if (products.length) {
      for (let i = 0; i < products.length; i++) {
        const { id, amount, name, price, amountToAddToCart } = products[i];

        await axiosFetch({
          axiosInstance: axios,
          method: "put",
          url: `/products/${id}`,
          requestConfig: {
            id,
            name,
            price,
            amount: amount - amountToAddToCart,
          },
        });
      }

      axiosFetch({
        axiosInstance: axios,
        method: "get",
        url: "/products",
      }).then(() => {
        dispatch(clearCartProducts());
        toast({
          title: "Compra realizada con exito. :)",
          description: "Gracias por confiar en nosotros.",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
      });
    }
  }

  useEffect(() => {
    if (productsFromApi.length) {
      dispatch(setProducts({ productsFromApi }));
    }
  }, [productsFromApi]);

  return (
    <div className="cart-panel">
      <section className="cart-panel__buttons">
        <Button
          disabled={loading || !products.length}
          isLoading={loading}
          onClick={clearCart}
          className="cart-panel__buttons__clear-cart-button"
          colorScheme="orange"
          variant="solid"
          size="md"
          leftIcon={<AiOutlineClear />}
        >
          Vaciar carrito
        </Button>
        <Button
          disabled={loading || !products.length}
          isLoading={loading}
          onClick={buyProducts}
          className="cart-panel__buttons__buy-products-button"
          colorScheme="messenger"
          size="md"
          leftIcon={<GiWallet />}
        >
          Finalizar compra
        </Button>
      </section>
      {loading ? (
        <Loading />
      ) : (
        <ProductRowList loading={loading} products={products} />
      )}
      <section className="cart-panel__total-money-container">
        <Text fontSize="4xl" as="i">
          Total ${total}
        </Text>
      </section>
    </div>
  );
}
