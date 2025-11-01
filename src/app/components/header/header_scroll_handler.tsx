"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

interface ScrollProps {
  dispatch: Dispatch<SetStateAction<number>>;
}

export default function HeaderScrollHandler({ dispatch }: ScrollProps) {
  useEffect(() => {
    const handleScroll = () => {
      dispatch(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
