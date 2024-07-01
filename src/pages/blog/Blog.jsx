import { BLOGDATAS } from "../../assets/BlogData.jsx"
import "./blog.scss"
import { Link } from "react-router-dom"
import { useEffect } from "react"
// réactiver helmet toutes pages avant nouveau build
import { Helmet } from "react-helmet"

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
          {/* Réactiver Helmet avant nouveau build toutes pages */}
             <Helmet>
      <title>Blog</title>
      <meta name="description" content="Blog d'Anne-Christine Brunel diététicienne et micronutritionniste à Crest(26)" />
    </Helmet>
        {BLOGDATAS.map((blogdata, id) =>
            <Link to={`/blog/blogitem/${id}`} id="blog-card" key={id}>
            <h1>{blogdata.name}</h1>
            <img className="blog-data-img" src={`/${blogdata.image}`} alt={`${blogdata.alt}`} />
            <div>{blogdata.text}</div>
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
        
  
       
    
