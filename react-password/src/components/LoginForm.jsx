
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { GET_USER } from '../store/actions/users'
import { GET_PASSWORDS } from '../store/actions/passwords'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

    //masukan dari form keluar di this.props.form.validateFields(cb(values)) ---> values => {username, password,remember}
class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.GET_PASSWORDS()
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className = 'container'>
      <p>Login Form</p>
      <Form onSubmit={this.handleSubmit} className="login-form">
       <FormItem>
         {getFieldDecorator('userName', {
           rules: [{ required: true, message: 'Please input your username!' }],
         })(
           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
         )}
       </FormItem>
       <FormItem>
         {getFieldDecorator('password', {
           rules: [{ required: true, message: 'Please input your Password!' }],
         })(
           <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
         )}
       </FormItem>
       <FormItem>
         {getFieldDecorator('remember', {
           valuePropName: 'checked',
           initialValue: true,
         })(
           <Checkbox>Remember me</Checkbox>
         )}
         <a className="login-form-forgot" href="" style={{marginRight:'18px'}}>Forgot password</a>
         <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight:'18px'}}>
           Log in
         </Button>
         Or <a href="">register now!</a>
       </FormItem>
     </Form>
     </div>
    );
  }
}



const WrappedNormalLoginForm = Form.create()(LoginForm);

const mapDispatchToProps = (dispatch) => bindActionCreators ({
  // GET_USER,
  GET_PASSWORDS
},dispatch)


export default connect(null, mapDispatchToProps)(WrappedNormalLoginForm)