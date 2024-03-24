"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="overflow-hidden">
      <div className="flex items-center w-72 h-14 ">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          Chat APP
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
