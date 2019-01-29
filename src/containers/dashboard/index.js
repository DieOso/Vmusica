import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import "./dashboard.css";
import AnuncioList from "../../components/anuncios/AnuncioList";
import Notifications from "../../components/dashboard/Notifications";
import CreateAnuncio from "../anuncios";

class Dashboard extends Component {
  render() {
    const { anuncios, notifications } = this.props;

    return (
      <React.Fragment>
        <div className="dashboard-container">
          <div className="select">
            <div className="box">
              <li>
                <a>Se Busca</a>
              </li>
            </div>
            <div className="box">
              <li>
                <a>Se Ofrece</a>
              </li>
            </div>
          </div>
          <div className="main-content">
            <AnuncioList anuncios={anuncios} />

            {/* <Notifications notifications={notifications} /> */}
          </div>
        </div>
        <div className="more">
          <div className="dots">
            <svg viewBox="0 0 24 4">
              <g transform="translate(-109 -532)">
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(109 532)"
                  fill="#f4f4f4"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(119 532)"
                  fill="#f4f4f4"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(129 532)"
                  fill="#f4f4f4"
                />
              </g>
            </svg>
          </div>
        </div>
        <CreateAnuncio />
      </React.Fragment>
    );
  }
}

// export default Dashboard;

const mapStateToProps = state => {
  console.log(state);
  return {
    anuncios: state.firestore.ordered.anuncios,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "anuncios", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
