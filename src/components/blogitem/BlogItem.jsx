import "../../pages/blog/blog.scss";
import { useParams } from "react-router-dom";
import { BLOGDATAS } from "../../assets/BlogData.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const BlogItem =(props) =>{

  //code pour précharger les images
  const images = BLOGDATAS.map((blogitem) => blogitem.image);
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);
//fin code pour précharger les images

    const navigate = useNavigate();
   console.log(props)
    let {id} = useParams();
    console.log(id)
    const blogitem = BLOGDATAS.find(blogitem => String(blogitem.id) === id);

    const [data, setData] = useState(null);

    useEffect(() => {
      const foundData =  BLOGDATAS.find(blogitem => String(blogitem.id) === id);
      if (foundData) {
        setData(foundData);
      } else {
        navigate('/error');
      }
    }, [id, navigate]);

 
  return data ? (
    <main className="blog-item-container">
<h1 className="blog-item-title">{blogitem.name}</h1>
{/* <div className="blog-item-subcontainer"> */}
    <img src={`/${blogitem.image}`} alt={blogitem.alt} className="blog-item-image" />
           <div className="complet-text">
            {BLOGDATAS[id].completText.map((completTexti,id) =>(
                <div key={id}>{completTexti}</div>))}
                </div>
                {/* </div> */}

    </main>
    ) : null
}

export default BlogItem