import React, { Component } from 'react';
import { Table, Input, Button, Icon, Divider } from 'antd';
import { GET_PASSWORDS, EDIT_PASSWORD_START, FILTER_PASSWORD } from '../store/actions/passwords'
import {  connect } from 'react-redux'
import {  bindActionCreators } from 'redux'
import { Link } from 'react-router-dom' 
//gotta import moment for created at / updated at




class DataTable extends Component {
  constructor () {
    super()
    this.state = {
    filterDropdownVisible: false,
    // data: [],
    searchText: '',
    filtered: false,
   };
  }
onInputChange = (e) => {
  this.setState({ searchText: e.target.value });
}
onSearch = () => {
  const { searchText } = this.state;
  const reg = new RegExp(searchText, 'gi');
  console.log('masuk search');
  //disini mesti di dispatch untuk nyari pake regex (search) -------->
  this.props.FILTER_PASSWORD(searchText)
  // this.setState({
  //   filterDropdownVisible: false,
  //   filtered: !!searchText,
  //   data: this.state.data.map((record) => {
  //     const match = record.email.match(reg);
  //     console.log(match);
  //     if (!match) {
  //       console.log('masuk sini');
  //       return null;
  //     }
  //     return {
  //       ...record,
  //       email: (
  //         <span>
  //           {record.email.split(reg).map((text, i) => (
  //             i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
  //           ))}
  //         </span>
  //       ),
  //     };
  //   }).filter(record => !!record),
  // });
}
fetchPasswords = () => {
  this.props.GET_PASSWORDS()
}


removeRecord = (record) => {
  console.log(record);
}

startEditing = (record) => {
  this.props.EDIT_PASSWORD_START()
}

componentWillMount () {
  this.fetchPasswords()
}
render() {
   const columns = [{
     title: 'E-Mail',
     dataIndex: 'email',
     key: 'email',
     filterDropdown: (
       <div className="custom-filter-dropdown">
         <Input
           ref={ele => this.searchInput = ele}
           placeholder="Search email"
           value={this.state.searchText}
           onChange={this.onInputChange}
           onPressEnter={this.onSearch}
         />
         <Button type="primary" onClick={this.onSearch}>Search</Button>
       </div>
     ),
     filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
     filterDropdownVisible: this.state.filterDropdownVisible,
     onFilterDropdownVisibleChange: (visible) => {
       this.setState({
         filterDropdownVisible: visible,
       }, () => this.searchInput && this.searchInput.focus());
     },
   }, {
     title: 'Password',
     dataIndex: 'password',
     key: 'password',
     render: (text,record) => ('****')
   }, {
     title: 'Website',
     dataIndex: 'website',
     key: 'website',
     filters: [{
       text: 'London',
       value: 'London',
     }, {
       text: 'New York',
       value: 'New York',
     }],
     onFilter: (value, record) => record.address.indexOf(value) === 0,
   },{
     title: 'Created At',
     dataIndex: 'createdAt',
     key: 'createdAt'
   }, {
     title: 'Actions',
     key: 'action',
     render: (text, record) => (
        <span>
          <Link to={`/edit/${record.email}`}><a onClick={(e)=>this.startEditing(record)}>Actions</a></Link>
        </span>
      )
   }];
   return <Table columns={columns} dataSource={this.props.data} />;
 }
}

const mapStateToProps = (state) => {
  return {
    data: state.passwordReducer.data
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  GET_PASSWORDS,
  EDIT_PASSWORD_START,
  FILTER_PASSWORD
},dispatch)



export default connect(mapStateToProps,mapDispatchToProps)(DataTable);
