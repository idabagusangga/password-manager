import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render} from 'enzyme'
import Jumbotron from './components/carousel'
import AddModal from './components/AddModal'
import DataTable from './components/Tables'
import AddForm from './components/AddForm'
import { Carousel } from 'antd'

Enzyme.configure({
  adapter: new Adapter()
})


describe ('<Home/>', () => {
  it('should render div containing Jumbotron, table, and modal', () => {
    const wrapper = shallow ((
      <Home/>
    ))
    expect(wrapper.contains(<div><Jumbotron></Jumbotron><AddModal></AddModal><DataTable></DataTable></div>)).toBe(true)
  })
})

describe ('<Carousel/>', () => {
  it('should render Carousel', () => {
    const wrapper = shallow ((
      <Jumbotron></Jumbotron>
    ))
    console.log('here: ======> ', wrapper.find('div'))
    expect(wrapper.find('Carousel')).toHaveLength(1)
    expect(wrapper.find('div')).toHaveLength(4)
    expect(wrapper.find('h2')).toHaveLength(4)
  })
})

describe ('<AddForm/>', () => {
  it()
})

// describe ('<AddForm/>', () => {
//   it('should render every components in the component thanks', () => {
//     const wrapper = shallow ((
//       <AddForm></AddForm>
//     ))
//   })
// })