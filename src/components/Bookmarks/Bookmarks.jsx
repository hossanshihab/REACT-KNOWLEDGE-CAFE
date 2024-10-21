
import Bookmark from './../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {

  return (
    <div className="md:w-1/3 text-center border-2 m-4 bg-lime-600 p-3 rounded-[40px]">
        <div>
            <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
        </div>
        <h2 className="text-purple-100 text-3xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
}

export default Bookmarks;