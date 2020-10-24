import React from 'react';

import logo from './logo.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      message: "Hello React World!"
    };
  }

  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result: " + result);
          this.setState({
            isLoaded: true,
            message: result.message
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, message } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <section className="wrapper">
          <header className="App-header">
            <p>Loading...</p>
          </header>
        </section>
      );
    } else {
      return (
        <section className="hero wrapper">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{message}</p>
          </header>
        </section>
      );
    }
  }
}

export default Home;
