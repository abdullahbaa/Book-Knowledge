
import './App.css'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

      
      
    </>
  )
}

export default App
