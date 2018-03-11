import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import AddForm from './AddForm'


//modalState must be in redux


class AddModal extends Component {
    state = {
     ModalText: 'Content of the modal',
     visible: false,
     confirmLoading: false,
   }
   showModal = () => {
     this.setState({
       visible: true,
     });
   }
   handleOk = () => {
     this.setState({
       ModalText: 'The modal will be closed after two seconds',
       confirmLoading: true,
     });
     setTimeout(() => {
       this.setState({
         visible: false,
         confirmLoading: false,
       });
     }, 2000);
   }
   handleCancel = () => {
     console.log('Clicked cancel button');
     this.setState({
       visible: false,
     });
   }
   render() {
     const { visible, confirmLoading, ModalText } = this.state;
     return (
       <div>
         <Button type="primary" onClick={this.showModal}>Open</Button>
         <Modal title="Title"
           visible={visible}
           onOk={this.handleOk}
           confirmLoading={confirmLoading}
           onCancel={this.handleCancel}
         >
           <AddForm></AddForm>
         </Modal>
       </div>
     );
   }
  }

export default AddModal;