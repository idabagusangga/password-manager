import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {  connect } from 'react-redux'
import { ADD_PASSWORD } from '../store/actions/passwords'
import Spinner from './LoadingSpin'
import { Form, 
        Input, 
        Tooltip, 
        Icon, 
        Cascader, 
        Select, 
        Row, 
        Col, 
        Checkbox, 
        Button, 
        AutoComplete } from 'antd';
        
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = []
const lowerCase = new RegExp ("^(?=.*[a-z])")
const upperCase = new RegExp ("^(?=.*[A-Z])")
const numeric = new RegExp ("^(?=.*[0-9])")
const length = new RegExp ("^(?=.{8,})")


class AddForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.ADD_PASSWORD(values)
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateLowerCase = (rule, value, callback) => {
    const form = this.props.form;
    if (value && !lowerCase.test(value) ) {
      callback('Must contain at least 1 lowercase alphabetical character')
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && !lowerCase.test(value) ) {
      callback('Must contain at least 1 lower case alphabetical character')
    } else if (value && !upperCase.test(value) ) {
      callback('Must contain at least 1 upper case alphabetical character')
    } else if (value && !numeric.test(value) ) {
      callback('Must contain at least 1 numeric case')
    } else if (value && !length.test(value) ) {
      callback('Password must be 8 characters or longer')
    }
    else if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    if (this.props.dataStatus.isLoading === true) {
      return (
        <Spinner></Spinner>
      )
    } else {
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input name="password" type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Website"
          >
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'Please input website!' }],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="PIN"
            extra="This is used to retrieve, edit and delete your password later"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('PIN', {
                  rules: [{ required: true, message: 'Please enter your PIN' }],
                })(
                  <Input type="password" />
                )}
              </Col>
            </Row>
          </FormItem>
           <Button type="primary" htmlType="submit">{this.props.dataStatus.button}</Button>
        </Form>
      );  
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dataStatus: state.passwordReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  ADD_PASSWORD
},dispatch)


const WrappedRegistrationForm = Form.create()(AddForm);

export default connect(mapStateToProps,mapDispatchToProps)(WrappedRegistrationForm);