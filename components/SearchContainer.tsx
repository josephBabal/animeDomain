"use client"

import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import SearchEngine from './SearchEngine';
import SearchResults from './SearchResults';
import { AnimeProp } from '@/app/types/types';
import { getAnimeSearch } from '@/app/action';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';


//*  debouncedSearch is used for query fething and updates when query changes 
//* and doesn't change after 2s
const SearchContainer = () => {
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(query, 1000);
  const [searchResults, setSearchResults] = useState<AnimeProp[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //* input focus and clicking off
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const linkRefs = Array.from({ length: 6 }).map(() => useRef<HTMLAnchorElement>(null));
  const [hasDebouncedSearchChanged, setHasDebouncedSearchChanged] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!hasDebouncedSearchChanged) {
      setHasDebouncedSearchChanged(true)
    }  
  };

  //* called when debouncedSearch changes
  const handleSearch = () => {
    setLoading(true);
    getAnimeSearch(debouncedSearch)
      .then((results: AnimeProp[]) => {
        setSearchResults(results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearSearch = (ref: any) => {
    setQuery("")
    setSearchResults([])
    ref?.current?.blur()
    setIsFocused(false)
  }

  useEffect(() => {
    // Use the debouncedSearch value to trigger the search when it changes
    handleSearch()
  }, [debouncedSearch, hasDebouncedSearchChanged]);

  //* executed when component is mounted and cleans up when the component is unmounted
  useOnClickOutside(inputRef, linkRefs, () => {
    setIsFocused(false);
  });


  return (
    <div className="relative flex flex-col items-center">
      <SearchEngine 
        query={query}
        handleInput={handleInput} 
        handleFocus={handleFocus} 
        inputRef={inputRef} 
        loading={loading} 
        hasDebouncedSearchChanged={hasDebouncedSearchChanged}
        isFocused
        clearSearch={() => clearSearch(inputRef)}
      />
      {isFocused === true && (
        <>
          {!loading && <SearchResults results={searchResults} linkRefs={linkRefs} />}
        </>
      )}
    </div>
  );
};

export default SearchContainer;