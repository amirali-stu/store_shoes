"use client";

import React, { useEffect, useState } from "react";
import MiddleHeader from "../MiddleHeader";
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
      <MiddleHeader setIsOpenBasket={setIsOpenBasket} />

      {/* <ContainerBox isOpenBasket={isOpenBasket} onCloseBasket={onCloseBasket} /> */}
    </>
  );
}

export default Navbar;
