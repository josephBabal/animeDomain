"use client"
import { useState } from "react"

type ReadMoreProps = {
  text: string
  maxLength: number 
}
const ReadMore = ({text, maxLength}: ReadMoreProps) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleReadMore = () => {
    setShowFullText(prev => !prev)
  }
  return (
    <div>
      {text.length > maxLength ? 
        !showFullText ? 
          <p> 
            {text.slice(0, maxLength) + '...'}
            <button onClick={toggleReadMore} className="text-blue-500">
              Read More
            </button>
          </p>
          : 
          <>
            <p> {text} </p>
            <button onClick={toggleReadMore} className="text-blue-500">
              Show Less
            </button>
          </>
        
    
        : <p> {text} </p>
      }

    </div>
  )
}

export default ReadMore