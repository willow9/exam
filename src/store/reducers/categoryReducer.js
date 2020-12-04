const initState = {
  categories: [
    { id: "kljskld323", title: "biology" },
    { id: "klj", title: "mathematics" },
    { id: "ld323", title: "magic" },
  ],
};
const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY": {
      // console.log(action.category);
      return { ...state, categories: [...state.categories, action.category] };
    }
    default:
      return state;
  }
};
export default categoryReducer;
