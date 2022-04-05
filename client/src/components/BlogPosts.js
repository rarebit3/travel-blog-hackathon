import Comments from './Comments'
import Likes from './Likes'

const BlogPosts = () => {
    
    
    return (
        <div className="blog-post-grid">
            <h2 className='location-title'>mapped blog posts</h2>
            <h3>Country:</h3>
            <image />
            <Likes />
            <Comments />
        </div>
    )
}

export default BlogPosts