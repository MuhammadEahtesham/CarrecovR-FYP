import React from "react";
import LoginAdmin from './Components/Logins/adminLogin';
import LoginUser from "./Components/Logins/userLogin";
import './Components/Logins/style.css'

class AppLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogginActive: true
      };
    }
  
    componentDidMount() {
      //Add .right by default
      this.rightSide.classList.add("right");
    }
  
    changeState() {
      const { isLogginActive } = this.state;
  
      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }
  
    render() {
      const { isLogginActive } = this.state;
      const current = isLogginActive ? "LoginAdmin" : "LoginUser";
      const currentActive = isLogginActive ? "LoginUser" : "LoginAdmin";
      return (
        <div className="App">
          <div className="login">
            <div className="container" ref={ref => (this.container = ref)}>
              {isLogginActive && (
                <LoginAdmin containerRef={ref => (this.current = ref)} />
              )}
              {!isLogginActive && (
                <LoginUser containerRef={ref => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  
  const RightSide = props => {
    return (
      <div
        className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };
  
  export default AppLogin;