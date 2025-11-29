"use client";

import React, { useEffect, useState } from "react";
import TopHeader from "../TopHeader";
import MiddleHeader from "../MiddleHeader";
import BottomHeader from "../BottomHeader";
import ContainerBox from "../../Basket/ContainerBox";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const onCloseBasket = () => {
    setIsOpenBasket(false);
  };

  useEffect(() => setIsOpenBasket(false), [pathname]);

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
