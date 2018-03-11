import React from 'react';
import { Carousel, Icon } from 'antd'

const Jumbotron = () => {
  return (
    <Carousel autoplay>
      <div><h2><Icon type="lock" /><br></br>One Stop Password Management Service</h2></div>
      <div><h2><Icon type="book" /><br></br>Simpan semua Username dan Password di dalam satu Website</h2></div>
      <div><h2><Icon type="warning" /><br></br>Authentication untuk CRUD</h2></div>
      <div><h2><Icon type="smile-o" /><br></br>User Friendly (hopefully)</h2></div>
    </Carousel>
  )
}

export default Jumbotron