
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleaddToBookamarks}) => {
    const {title, cover, reading_time, author_img, posted_date, hashtags} = blog;
    console.log(blog);
  return (
    <div className="mb-20">
        <img className="w-[900px] mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
        <div className="flex justify-between mb-4">
            <div className="flex items-center">
                <img className="w-14" src={author_img} alt="" />
                <div>
                    <p>Posted Dtate:{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} Min read</span>
                <button onClick={()=>handleaddToBookamarks(blog)} className='text-3xl btn ml-2 text-red-600'><FaBookmark /></button>
            </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>
            {hashtags.map((hash, id) => <span key={id}>{hash}</span>)}
        </p>

    </div>
  )
}

export default Blog;