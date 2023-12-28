"use client"

import { useEffect } from 'react';

//* Ref: SearchContainer.tsx
export const useOnClickOutside = (
  ref: React.RefObject<HTMLInputElement>,
  linkRefs: React.RefObject<HTMLAnchorElement>[],
  handler: () => void
) => {
  useEffect(() => {
    // * Event listener function to handle mousedown events
    //*  and determine if it occurred outside the specified elements.

    const listener = (event: MouseEvent) => {
      //* Variable to track if the click occurred inside any linked element
      let isInsideLink = false;

      //* Check each linked element's reference to see if the click occurred inside it
      for (const linkRef of linkRefs) {
        if (linkRef.current && linkRef.current.contains(event.target as Node)) {
          isInsideLink = true;
          break;
        }
      }

      // * Check if the click occurred inside any linked element or the search input element
      if ((ref.current && ref.current.contains(event.target as Node)) || isInsideLink) {
        return;
      }
      handler();
    };

    // * Add event listener to the document for mousedown events
    document.addEventListener('mousedown', listener);
    return () => {
      // * Clean up by removing the event listener when the component unmounts
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, linkRefs, handler]);
};
