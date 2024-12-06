"use client";

import { X } from "lucide-react";
import Link from "next/link";

export const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/">
        <X className="size-4" />
      </Link>
    </button>
  );
};