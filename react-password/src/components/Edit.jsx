import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { EDIT_PASSWORD, REMOVE_PASSWORDS } from '../store/actions/passwords'
import Spinner from './LoadingSpin'
import AddForm from './AddForm'
import { Button } from 'antd'

class Edit extends Component {
  
  removeDocument = () => {
    this.props.REMOVE_PASSWORDS(this.props.match.params.name)
  }
  
  render() {
    return (
      <div>
        <AddForm></AddForm><br></br>
        <Button type='danger' onClick={(e)=>this.removeDocument()}>Remove</Button>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => bindActionCreators ({
  EDIT_PASSWORD,
  REMOVE_PASSWORDS
},dispatch)



export default connect(null,mapDispatchToProps)(Edit);

