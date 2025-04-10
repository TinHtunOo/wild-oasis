import { useEffect, useRef } from "react";

export function useClickOutside(handler, captureEvent = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClickOutside, captureEvent);
      return () =>
        document.removeEventListener("click", handleClickOutside, captureEvent);
    },
    [handler, captureEvent]
  );
  return ref;
}
