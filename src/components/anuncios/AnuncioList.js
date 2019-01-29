import React from "react";
import { Link } from "react-router-dom";

import AnuncioSummary from "./AnuncioSummary";

const AnuncioList = ({ anuncios }) => {
  const list =
    anuncios &&
    anuncios.map(anuncio => {
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={"/anuncio/" + anuncio.id}
          key={anuncio.id}
        >
          <AnuncioSummary anuncio={anuncio} />
        </Link>
      );
    });
  return <div className="anuncios-list">{list}</div>;
};

export default AnuncioList;
