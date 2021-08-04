import React, { Component } from 'react';
import LastJob from './LastJob';
import PersonalData from './PersonalData';
import './PersonalData.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = INITIAL_STATE;
  }

  handleChange({target}) {
    const {name, value} = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <PersonalData
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;