import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    console.log('bookmark adding soon')
    console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    console.log('mark as read', time)
    setReadingTime(readingTime + time)

    console.log('removed bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header />
      <div className="flex max-w-7xl mx-auto">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} />
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  )
}