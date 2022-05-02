import React from 'react';
import './FeedbackForm.css';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.state.isToggleOn);
    
  }
  render(){
    return (
      <div className='container m-2'>
          <h1>{this.state.isToggleOn ? 'First type of header' : 'Second type of header(adding diff text)'}</h1>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-danger' onClick={this.handleClick}>Press to change header</button>
          </div>
        </div>
    );
  }

}

export default FeedbackForm;