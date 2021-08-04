import React, { Component } from 'react';
import ComboBoxUF from './ComboBoxUF';

class PersonalData extends Component {
  render() {
    const {handleChange} = this.props
    return (
      <fieldset className="personal-container">
      <label className="personal-labels" htmlFor="">
        Nome
        <input
          name="name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label className="personal-labels" htmlFor="">
        Email
        <input
          name="email"
          type="email"
          onChange={handleChange}
        />
      </label>

      <label className="personal-labels" htmlFor="">
        CPF
        <input
          name="cpf"
          type="text"
          onChange={handleChange}/>
      </label>

      <label className="personal-labels" htmlFor="">
        Endereço
        <input
          name="address"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label className="personal-labels" htmlFor="">
        Cidade
        <input
          name="city"
          type="text"
          onChange={handleChange}
        />
      </label>

      {/* <label className="personal-labels" htmlFor="">
        Estado
        <ComboBoxUF
          value={this.state.countryState}
          handleChange={handleChange}
        />
      </label> */}

      <div onChange={handleChange} value="addressType">
        <label className="personal-labels" htmlFor="">
          Casa
          <input type="radio" name="addressType" value="casa"/>
        </label>
        <label className="personal-labels" htmlFor="">
          Apartamento
          <input type="radio" name="addressType" value="apartamento"/>
        </label>
      </div>
    </fieldset>
    );
  }
}

export default PersonalData;