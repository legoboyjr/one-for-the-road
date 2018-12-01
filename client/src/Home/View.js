import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./HomeForm";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

const ErrorView = () => {
  return (
    <h1>You need to allow Geolocation Services to use the app.</h1>
  )
}

export default class HomeView extends Component {
  state = {
    isOpen: false
  };
  toggleModal = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  render() {
    const { coords, error } = this.props;
    const { latitude, longitude } = coords;
    const { isOpen } = this.state;
    if(error) return <ErrorView />
    return (
      <React.Fragment>
        <section className="flex flex-column flex-grow-1 justify-content-center align-items-center ">
          <p className="fw4 m-1">Latitude: {latitude}</p>
          <p className="fw4 m-1">Longitude: {longitude}</p>
          <button 
            onClick={this.toggleModal}
            disabled={!(latitude && longitude)}
            className="fw4 input-reset p-4 m-1"
          >Note this Location</button>
        </section>
        <Modal
          onRequestClose={this.toggleModal}
          isOpen={isOpen}
          closeTimeoutMS={150}
          shouldCloseOnOverlayClick={true}
        >
          <Form {...this.props} toggleModal={this.toggleModal} />
        </Modal>
      </React.Fragment>
    );
  }
}

HomeView.propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }).isRequired,
  text: PropTypes.string.isRequired
};
