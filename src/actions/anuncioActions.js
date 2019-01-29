const createAnuncio = anuncio => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore
      .collection("anuncios")
      .add({
        ...anuncio,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorID,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_ANUNCIO",
          payload: anuncio
        });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ANUNCIO_ERROR", err });
      });
  };
};

export default createAnuncio;
