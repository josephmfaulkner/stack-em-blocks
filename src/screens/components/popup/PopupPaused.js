import React from 'react';
import Modal from 'react-modal';




import "./Popup.css";

class PopupPaused extends React.Component {

  render()
  {
    return (
        <Modal
        isOpen={this.props.modalOpen}
        ariaHideApp={false}
        //onAfterOpen={afterOpenModal}
        //onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Popup PopupPaused"
        overlayClassName="PopupOverlay PopupOverlayPaused"
        >

        <h1><i className="fa fa-pause"></i></h1>     
        <div>
            <button onClick={() => {this.props.onResumeClick();}}>
              <i className="fa fa-play"></i>
            </button>
            <button onClick={() => {this.props.onRestartClick();}}>
              <i className="fa fa-undo-alt"></i>
            </button>
            <button>
              <i className="fa fa-cog"></i>
            </button>
            <button onClick={() => {this.props.onMainMenuClick();}}>
              <i className="fa fa-sign-out-alt fa-flip-horizontal"></i>
            </button>
        </div>

        </Modal>
      );
  }

}

export default PopupPaused;