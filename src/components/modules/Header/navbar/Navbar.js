"use client";

import React, { useState } from "react";
import TopHeader from "../TopHeader";
import MiddleHeader from "../MiddleHeader";
import BottomHeader from "../BottomHeader";
import ContainerBox from "../../Basket/ContainerBox";

function Navbar() {
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const onCloseBasket = () => {
    setIsOpenBasket(false);
  };

  return (
    <>
      <TopHeader />
      <MiddleHeader setIsOpenBasket={setIsOpenBasket} />
      <BottomHeader />

      <ContainerBox isOpenBasket={isOpenBasket} onCloseBasket={onCloseBasket} />
    </>
  );
}

export default Navbar;
