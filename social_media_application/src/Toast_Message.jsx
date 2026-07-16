const Toast_Message = ({ deleteId, dispatch, setShowToast  }) => {
  const handle_click = (value) => {
    if (value === "yes") {
       dispatch({
        type: "Delete_Post",
        payload: deleteId,
      })
      
    }

    setShowToast(false);
}
  
  return (
    <div className="toast-overlay" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-card shadow-lg">
        <div className="toast-icon">!</div>

        <div className="toast-content">
          <h6 className="toast-title">Delete post?</h6>
          <p className="toast-message">
            This action cannot be undone. Are you sure you want to remove this post?
          </p>

          <div className="toast-actions">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handle_click("no")}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handle_click("yes")}
            >
              Delete
            </button>
          </div>
        </div>

        <button
          type="button"
          className="btn-close toast-close"
          aria-label="Close"
          onClick={() => handle_click("no")}
        ></button>
      </div>
    </div>
  );
};

export default Toast_Message;
