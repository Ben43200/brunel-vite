import { BLOGDATAS } from "../../assets/BlogData.jsx"
import "./blog.scss"
import { Link } from "react-router-dom"

const Blog = () =>{
    // console.log(completText)
// console.log(BLOGDATAS)
// console.log(BLOGDATAS[1].completText)
// console.log(BLOGDATAS[0].completText)
    return(
        <main className="main-blog-container">
        {BLOGDATAS.map((blogdata, id) =>
            <Link to={`/blog/blogitem/${id}`} id="blog-card" key={id}>
            <h1>{blogdata.name}</h1>
            <img className="blog-data-img" src={blogdata.image} alt={`${blogdata.alt}`} />
            <p>{blogdata.text}</p>
            {BLOGDATAS[id].completText.map((completTexti,id) =>(
                <div key={id}>{completTexti}</div>
            ))}
           
           </Link>
        // </div>
        )}
    </main>
    )
} 

export default Blog
        
  
       
    
