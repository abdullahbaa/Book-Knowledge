
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'


function App() {

    const [bookmarks, setBookmarks] =useState([]);
    const [readingTime,setReadingTime] =useState(0)

    const handleAddBookmark = blog =>{
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark);
    }

    const handleMarkAsRead =time =>{
      const newReadingTime = readingTime+ time;
      setReadingTime(newReadingTime);
    }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs  handleAddBookmark= {handleAddBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

      
      
    </>
  )
}

export default App
