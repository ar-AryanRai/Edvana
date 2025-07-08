import React, { useRef, useEffect, useState } from "react";

const useDebounce = (callback, searchValue) => {
  const timerRef = useRef(null);

  const previousValueRef = useRef(searchValue);

  useEffect(() => {
    if (!searchValue) return;

    if (previousValueRef.current === searchValue) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      callback(searchValue);
    }, 300);

    return () => clearTimeout(timerRef.current);
  }, [searchValue]);
};

export default useDebounce;
