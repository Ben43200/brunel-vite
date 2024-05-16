import { BLOGDATAS } from "../../assets/BlogData.jsx"
import "./blog.scss"

const Blog = () =>{

    return(
        <main className="main-blog-container">
        {BLOGDATAS.map((blogdata, index) =>
        <div className="blog-container" key={index}>
            <h1>{blogdata.name}</h1>
            <img className="blog-data-img" src={blogdata.image} alt={`${blogdata.alt}`} />
            <p>{blogdata.text}</p>
        </div>
        )}
    </main>
    )
} 

export default Blog
        
  
       
    
