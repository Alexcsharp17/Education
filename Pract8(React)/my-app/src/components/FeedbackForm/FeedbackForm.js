import React from 'react';
import './FeedbackForm.css';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, mouseOnHover: false};

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.state.isToggleOn);
  }

  handleMouseHover() {
    this.setState(prevState => ({
      mouseOnHover: !prevState.mouseOnHover
    }));
    console.log(this.state.isToggleOn);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='container m-2'>
            <h1>{this.state.isToggleOn ? 'First type of header' : 'Second type of header(adding diff text)'}</h1>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-danger' onClick={this.handleClick}>Press to change header</button>
            </div>
        </div>
        <div className='container m-2'>
          <div>
            <label>
              Имя:
              <input className={this.state.value == null || this.state.value == '' ?  'border border-danger': 'border border-primary'} type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <p  onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className={this.state.mouseOnHover? 'border border-3 border-danger p-1 bg-primary w-25 mx-auto my-2 hoveredMouse': ' border border-3 border-dark p-1 bg-light w-25 mx-auto my-2'} >Hover over me.</p>
          </div>
          <div>
            <input type="submit" value="Отправить" />
          </div>
        </div>
      </form>
    );
  }

}

export default FeedbackForm;
