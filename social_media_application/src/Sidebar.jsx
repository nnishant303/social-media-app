const Sidebar = ({SetPage}) => {

    const handle_click = (page)=>{
        SetPage(page);
    }
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark text-white vh-100">

      <h5 className="text-center mb-4">
        <span>𝓈𝑜𝒸𝒾𝒶𝓁 𝓂𝑒𝒹𝒾𝒶</span>
        
        
        
      </h5>

      <ul className="nav nav-pills flex-column mb-auto">

        <li className="nav-item mb-2">
          <button className="btn btn-dark w-100" onClick={()=> handle_click("Home") }>
            <span className="m-1">Home </span> 
            <i className="bi bi-house-fill"></i>
            
          </button>
        </li>

        <li className="nav-item mb-2">
          <button className="btn btn-dark w-100" onClick={()=> handle_click("Create-Post") }>
            <span className="m-1">Create Post </span>
            <i className="bi bi-plus-circle-fill"></i>
            
          </button>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
