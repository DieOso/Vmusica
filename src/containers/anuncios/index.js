import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import "./create.css";
import createProject from "../../actions/anuncioActions";
import { connect } from "react-redux";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="create-container">
        <h5 className="head">Crear Anuncio</h5>
        <form
          style={{ margin: "0 30px" }}
          onSubmit={this.handleSubmit}
          className=""
        >
          <div className="radio">
            <div className="align">
              <label className="label">Se Busca</label>
              <input className="hide" type="radio" value="se busca" />
              <span className="custom" />
            </div>
            <div className="align">
              <label className="label">Se Ofrece</label>
              <input className="hide" type="radio" value="se busca" />
              <span className="custom" />
            </div>
          </div>

          <input
            placeholder="title name"
            type="text"
            name="title"
            onChange={this.handleChange}
          />

          <textarea
            placeholder="Contenido del anuncio..."
            name="content"
            className=""
            onChange={this.handleChange}
          />

          <div className="">
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
