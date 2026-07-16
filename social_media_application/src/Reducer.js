const Reducer = (state ,action)=>{
    switch (action.type){

        case "Add_Post" :

        return [action.payload , ...state];

        case "Delete_Post" :
        
        return state.filter((post)=> post.id !== action.payload);

        default :
             return state;
    }
}

export default Reducer;