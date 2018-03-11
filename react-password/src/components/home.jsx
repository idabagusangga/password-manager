import React, { Component } from 'react';
import LoginForm from './LoginForm'
import Carousel from './carousel'
import DataTable from './Tables'
import AddModal from './AddModal'


class Home extends Component {
  render() {
    return (
      <div>
      <Carousel></Carousel>
      <AddModal></AddModal>
      <DataTable></DataTable>
      </div>
    );
  }
}

export default Home;