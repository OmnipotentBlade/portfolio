'use client'
import { useState } from "react";

const ToggleParagraph: React.FC<{text: string, lines:string}> = ({ text, lines }) => {
    const [showMore, setShowMore] = useState(false);
  
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            { lines === "5" ? (
                <p className={`${showMore ? 'block' : `line-clamp-5`}`}>{text}</p>
            ) : lines === "4" ? (
                <p className={`${showMore ? 'block' : `line-clamp-4`}`}>{text}</p>
            ) : lines === "3" ? (
                <p className={`${showMore ? 'block' : `line-clamp-3`}`}>{text}</p>
            ) :
                <p className={`${showMore ? 'block' : `line-clamp-4`}`}>{text}</p>
            }

            {!showMore ? (
                <button className='text-blue-600' onClick={toggleShowMore}>show more</button>
            ) :
                <button className='text-blue-600' onClick={toggleShowMore}>show less</button>
            }
        </div>
    );
};

export default ToggleParagraph;