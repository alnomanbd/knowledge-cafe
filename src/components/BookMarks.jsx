import React from 'react'
import Bookmark from './Bookmark'

const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
            <h3 className='text-4xl'>Reading Time : {readingTime}</h3>
            <h1 className='text-4xl text-center'>BookMarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, index) => (
                    <Bookmark key={index} bookmark={bookmark}/>
                ))
            }
        </div>
    )
}

export default BookMarks