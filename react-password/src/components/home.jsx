import React, { Component } from 'react';
import LoginForm from './LoginForm'
import Jumbotron from './carousel'
import DataTable from './Tables'
import AddModal from './AddModal'


class Home extends Component {
  render() {
    return (
      <div>
      <Jumbotron></Jumbotron>
      <AddModal></AddModal>
      <DataTable></DataTable>
      </div>
    );
  }
}

export default Home;