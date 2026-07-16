const Home = ({ posts , dispatch}) => {
  return (
    <>
      <div className="row m-3">
        {posts.map((post) => {
          return (
            <div className="col-md-5 mb-3 card-div" key={post.id}>
              <div className="card post">
                <div className="card-body">
                  <h5 className="card-title post-title" title={post.title}>
                    {post.title}
                  </h5>
                  <div className="card-text">
                    <p className="post-description" title={post.description}>
                      {post.description}
                    </p>
                  </div>
                  <span className="delete-icon position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                   onClick={() =>
                    dispatch({
                      type: "Delete_Post",
                      payload: post.id,
                    })
                   }
                  >
                    <i className="bi bi-trash"></i>
                  </span>
                  {post.hashtags.map((hashtag) => {
                    return (
                      <button className="btn btn-primary m-1" key={hashtag}>
                        {hashtag}
                      </button>
                    );
                  })}

                  <p className="text-bg-warning p-2 mt-3">
                    Got {post.views} views
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
