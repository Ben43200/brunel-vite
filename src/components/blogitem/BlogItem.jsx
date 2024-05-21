// import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BLOGDATAS } from "../../assets/BlogData.jsx";
import { blogdataitem } from "../../assets/BlogDataItem.jsx";
// import CompletText from "../CompletText.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const BlogItem =(props) =>{

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
    <main>
<h1 className="blog-item-title">{blogitem.name}</h1>
    <img src={`/${blogitem.image}`} alt={blogitem.alt} />
           <div className="complet-text">
            {BLOGDATAS[id].completText.map((completTexti,id) =>(
                <div key={id}>{completTexti}</div>))}
                </div>

    </main>
    ) : null
}

export default BlogItem