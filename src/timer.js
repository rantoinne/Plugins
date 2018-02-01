import React, {Component} from 'react';

class Timer extends Component {

componentDidMount(){
  this.timer = setInterval(this.hands, 1000)
}

  constructor(props){
    super(props);

    this.state = {
      watch: 0
    };
    this.hands = this.hands.bind(this);
  }

  hands(){
      this.setState({watch: new Date() - this.props.start})
  }

  render(){
    var final = Math.round(this.state.watch/1000);
    return(
      <div>
       You have been surfing since: <hr />
        <span>{final}
        </span>
        <p><h4>Seconds.</h4>
        </p>
      </div>
    );
  }
}

export default Timer;
