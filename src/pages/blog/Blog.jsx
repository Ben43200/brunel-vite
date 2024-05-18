import { BLOGDATAS } from "../../assets/BlogData.jsx"
import "./blog.scss"
import { Link } from "react-router-dom"

const Blog = () =>{

    return(
        <main className="main-blog-container">
        {BLOGDATAS.map((blogdata, id) =>
        
        // <div className="blog-card" key={id}>
            <Link to={`blogitem/${id}`} id="blog-card" key={id}>
            <h1>{blogdata.name}</h1>
            <img className="blog-data-img" src={blogdata.image} alt={`${blogdata.alt}`} />
            <p>{blogdata.text}</p>
            <div>{blogdata.completText}</div>
           </Link>
        // </div>
        
        )}
    </main>
    )
} 

export default Blog
        
  
       
    
