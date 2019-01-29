import React from "react";
// import moment from "moment";

import "./anuncio.css";

const AnuncioSummary = ({ anuncio }) => {
  return (
    <div className="anuncio-box">
      <div className="top-anuncio">
        <p className="name">
          {anuncio.authorFirstName} {anuncio.authorLastName}
        </p>
        <span className="title">{anuncio.title}</span>
        <p className="date">date</p>
      </div>
      <p className="content">{anuncio.content}</p>
    </div>
  );
};

export default AnuncioSummary;
