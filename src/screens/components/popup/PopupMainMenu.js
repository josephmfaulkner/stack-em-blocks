import React from 'react';
import Modal from 'react-modal';




import "./Popup.scss";

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
        <h1>StackEmBlocks <i className="fas fa-cubes"></i></h1>     
        <div>
            <button onClick={() => {this.props.onClickStartGame();}}>
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