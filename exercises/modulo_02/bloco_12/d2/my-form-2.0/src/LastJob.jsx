import React, {Component} from 'react';
import './LastJob.css';

class LastJob extends Component {
  render() {
    return (
      <fieldset className="last-job-container">
        <label className="last-job-labels" htmlFor="">
          Resumo do currículo
          <textarea
            name="" id=""
            cols="30"
            rows="10" />
        </label>

        <label className="last-job-labels" htmlFor="">
          Cargo
          <textarea
            name="" id=""
            cols="30"
            rows="10" />
        </label>

        <label className="last-job-labels" htmlFor="">
          Descrição do cargo
          <input type="text" />
        </label>
      </fieldset>
    )
  }
}

export default LastJob;