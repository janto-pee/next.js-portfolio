"use client";

import Button from "@/shared/Button";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 10 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          type="button"
          className="p-2 fixed right-6 bottom-7 z-20 text-2xl rounded-full bg-primary-500 text-secondary-50 hover:bg-secondary-200 hover:text-secondary-700 shadow-md"
          onClick={scrollUp}
        >
          <ChevronUpIcon className="w-8 text-secondary-50" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
