
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';
function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleaddToBookamarks = blog => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <div>
         <Header></Header>
         <div className='md:flex max-w-7xl mx-auto'>
         <Blogs handleaddToBookamarks={handleaddToBookamarks}></Blogs>
         <Bookmarks bookmarks={bookmarks}></Bookmarks>
         </div>
      </div>
    </>
  )
}

export default App
