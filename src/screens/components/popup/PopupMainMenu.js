import React from 'react';
import Modal from 'react-modal';




import "./Popup.css";

class PopupMainMenu extends React.Component {

   onStartGameClick() {
        this.props.exitGame();
        this.props.history.push("/");
   }

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
        <h1>Stack Em Blocks <i className="fas fa-cubes"></i></h1>     
        <div>
            <button onClick={() => {this.props.onClickStartGame(); console.log("Click Start");}}>
              <i className="fa fa-play"></i>
            </button>
            <button>
              <i className="fa fa-cog"></i>
            </button>
        </div>

        </Modal>
      );
  }

}

export default PopupMainMenu;