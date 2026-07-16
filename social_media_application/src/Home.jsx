import Toast_Message from "./Toast_Message";
import { useState } from "react";
const Home = ({ posts , dispatch}) => {

  const [showToast, setShowToast] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handle_click = (id)=>{
    setShowToast(true);
    setDeleteId(id);
  }
  return (
    <>
      <div className="row m-3">
        {posts.map((post) => {
          return (
            <div className="col-12 mb-3 card-div" key={post.id}>
              <div className="card post">
                <div className="card-body">
                  <h5 className="card-title post-title" title={post.title}>
                    {post.title}
                  </h5>
                  <div className="card-text">
                    <p className="post-description" title={post.body}>
                      {post.body}
                    </p>
                  </div>
                  <span className="delete-icon position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                   onClick={() =>
                    handle_click(post.id)
                   }
                  >
                    <i className="bi bi-trash"></i>
                  </span>

                  <div className="tag-list">
                    {post.tags.map((tag) => {
                      return (
                        <button className="btn btn-primary" key={tag}>
                          # {tag}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-bg-warning p-2 mt-3 views">
                    Got {post.views} views
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showToast && <Toast_Message 
      dispatch = {dispatch} 
      deleteId = {deleteId} 
      setShowToast = {setShowToast}/>}
    </>
  );
};

export default Home;
