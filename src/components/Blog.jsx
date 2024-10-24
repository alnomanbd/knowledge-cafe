import { FaBookmark } from "react-icons/fa"
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    console.log(blog)
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8 rounded-3xl" src={ cover } alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex gap-6">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{ posted_date }</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="text-2xl ml-2 text-red-600"><FaBookmark/></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((tag) => (
                        <span key={tag}><a href="">#{tag}</a></span>
                    ))
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-600 font-bold underline">Mark as Read</button>
        </div>
    )
}

export default Blog