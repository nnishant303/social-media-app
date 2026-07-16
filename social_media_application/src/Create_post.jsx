import { useRef, useState } from "react";

const Create_post = ({dispatch}) => {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const hashtagsRef = useRef();
    const viewsRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const handle_submit = (e)=>{
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        setTimeout(() => {
            const newPost = {
                id: Date.now(),
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                hashtags: hashtagsRef.current.value.split(" "),
                views: viewsRef.current.value
            };
            dispatch({
                type : "Add_Post",
                payload : newPost,
            });

            titleRef.current.value = ""
            descriptionRef.current.value = ""
            hashtagsRef.current.value = ""
            viewsRef.current.value = ""
            setIsLoading(false);
        }, 3000);
}
  return (
    <>
      <form className="m-5" onSubmit={(e)=> handle_submit(e)}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Enter post title"
            ref={titleRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postDescription" className="form-label">
            Post Description
          </label>
          <textarea
            className="form-control"
            id="postDescription"
            rows="4"
            placeholder="Write post description"
            ref={ descriptionRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postTags" className="form-label">
            Hashtags
          </label>
          <input
            type="text"
            className="form-control"
            id="postTags"
            placeholder="#travel #react #coding"
            ref={hashtagsRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postViews" className="form-label">
            Number of Views
          </label>
          <input
            type="number"
            className="form-control"
            id="postViews"
            placeholder="Enter views count"
            min="0"
            ref={viewsRef}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Creating...
            </>
          ) : (
            "Create Post"
          )}
        </button>
      </form>
    </>
  );
};

export default Create_post;
