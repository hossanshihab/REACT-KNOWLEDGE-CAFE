
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleaddToBookamarks = blog => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkReaded = (time) => {
    setReadingTime(readingTime + time)

    console.log('marking as read', time);
    // remove bookmarks
    console.log('remove bokkmarks by id', id);
    // const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id)
    // setBookmarks(remainingBookmarks)

  }

  return (
    <>
      <div>
         <Header></Header>
         <div className='md:flex max-w-7xl mx-auto'>
         <Blogs handleMarkReaded={handleMarkReaded} handleaddToBookamarks={handleaddToBookamarks}></Blogs>
         <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
         </div>
      </div>
    </>
  )
}

export default App
