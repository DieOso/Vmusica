const initState = {
  anuncios: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};

const anuncioReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ANUNCIO":
      console.log("created anuncio", action.payload);
      return state;
    case "CREATE_ANUNCIO_ERROR":
      console.log("create anuncio error", action.payload);
      return state;
    default:
      return state;
  }
};

export default anuncioReducer;
