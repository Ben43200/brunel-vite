import { BLOGDATAS } from "../../assets/BlogData.jsx"
import "./blog.scss"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Blog = () =>{
      //code pour précharger les images
  const images = BLOGDATAS.map((blogitem) => blogitem.image);
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);
//fin code pour précharger les images
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
            {/* <div className="complet-text">
            {BLOGDATAS[id].completText.map((completTexti,id) =>(
                <div key={id}>{completTexti}</div>
               
            ))}
           </div> */}
           </Link>
        // </div>
        )}
    </main>
    )
} 

export default Blog
        
  
       
    
