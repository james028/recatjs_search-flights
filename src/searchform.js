import React, { Component } from 'react'

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

const DEFAULT_STATE = {
  from: '',
  to: '',
  departureDate: '',
  returnDate: ''
};

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props.params,
      ...DEFAULT_STATE
    };
  }

  onChangeFrom = (e) => {
    this.setState({
        from: e.target.value
    })
  }

  onChangeTo = (e) => {
    this.setState({
      to: e.target.value
    })
  }

  render() {
    const { airports } = this.props;
    return (
      <div>
        <form 
        name="search" 
        method="POST"
         >
          <label>From:
            <select
            name="from"
            value={this.state.from}
            onChange={this.onChangeFrom}
            >
                {airports.map((e) => {
                  <option>{e.city}</option>
                })}
            </select>
          </label>
          <label>To:
            <select
            name="to"
            value={this.state.to}
            onChange={this.onChangeTo}
            >
          
            </select>
          </label>
          <label>
            <input type="date" name="" />
          </label>
          <label>
            <input type="date" name="" />
          </label>
          <button>Submit</button>
          <button>Reset</button>
        </form>
      </div>
    )
  }
}
export default SearchForm;
