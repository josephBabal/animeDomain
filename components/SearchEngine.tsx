import { ChangeEvent } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import { VscChromeClose } from "react-icons/vsc";


type QueryFunction = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleFocusFunction = () => void

type SearchEngineProps = {
  query: string
  handleInput: QueryFunction,
  handleFocus: HandleFocusFunction,
  inputRef: React.RefObject<HTMLInputElement>,
  loading: boolean,
  hasDebouncedSearchChanged: boolean,
  isFocused: boolean
  clearSearch: () => void
}

const SearchEngine: React.FC<SearchEngineProps> = ({ 
  query,
  handleInput, 
  handleFocus, 
  inputRef, 
  loading,
  hasDebouncedSearchChanged,
  isFocused,
  clearSearch
}) => {
  
  return (
    <>
      <input 
        type="search"
        placeholder="Search for anime"
        onChange={(e) => handleInput(e)}
        className="
          relative
          w-full md:w-[60%]
          ps-12 pe-2 py-2 
          outline-none 
          rounded-lg
          border-2 
          placeholder:text-zinc-100
          bg-zinc-900 
          border-zinc-700 
          focus:bg-zinc-700 focus:placeholder:text-transparent focus:rounded-t-lg
          focus:rounded-b-none focus:border-b-[1px] focus:border-b-zinc-400
          hover:bg-zinc-700
        "
        value={query}
        ref={inputRef}
        onFocus={handleFocus}
      />
      <IoSearchOutline 
        className=" 
          absolute 
          text-zinc-400 
          top-[13px] left-[15px]
          md:left-[22%] 
          text-lg
        " 
      />
      {/* <div className="flex flex justify-around absolute w-[40px]  top-[13px] left-[90%] md:left-[70%]">  */}
        {hasDebouncedSearchChanged && loading && isFocused === true &&
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={20}
            height={20}
            className="object-contain absolute top-[13px] right-[11%] md:right-[25%] lg:right-[24%] "
          />
        }
      {isFocused && <VscChromeClose
          onClick={() => clearSearch()}
          className="
            absolute 
            top-[10px] right-[2%] md:right-[21%] 
            text-2xl 
            object-contain 
            hover:cursor-pointer
          "
        />}
      {/* </div> */}

    </>
  )
}

export default SearchEngine