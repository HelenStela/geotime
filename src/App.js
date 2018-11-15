import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './myApp.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class MyApp extends Component {
  render(){
    return(
<body>
	<div class="period-table">
		<div class="table-header">
			<div class="column-one-name header">Source</div>
			<div class="column-two-names header">
				<div class="name">Reservoir</div>
				<div class="resource-left">Clastics</div>
				<div class="resource-right">Carbonates</div>
			</div>
			<div class="column-two-names header">
				<div class="name">Hydrocarbon</div>
				<div class="resource-left">Gas</div>
				<div class="resource-right">Oil</div>
			</div>
		</div>
		<div class="container" id="Cenozoic">
			<div class="inner-content">
				<div class="period">[-] Cenozoic</div>
				<div class="column-one-name">8</div>
				<div class="column-two-names">
						<div class="resource-left">25</div>
						<div class="resource-right">8</div>
				</div>
				<div class="column-two-names">
						<div class="resource-left">1</div>
						<div class="resource-right"></div>
				</div>
			</div>
			<div class="container" id="Quaternary">
				<div class="inner-content">
					<div class="period">[+] Quaternary</div>
					<div class="column-one-name">1</div>
					<div class="column-two-names">
							<div class="resource-left">1</div>
							<div class="resource-right"></div>
					</div>
					<div class="column-two-names">
							<div class="resource-left"></div>
							<div class="resource-right"></div>
					</div>
				</div>
			</div>
			<div class="container" id="Neogene">
				<div class="inner-content">
					<div class="period">[+] Neogene</div>
					<div class="column-one-name"><div class="diamond"></div>6</div>
					<div class="column-two-names">
							<div class="resource-left">12</div>
							<div class="resource-right">8</div>
					</div>
					<div class="column-two-names">
							<div class="resource-left">1</div>
							<div class="resource-right"></div>
					</div>
				</div>
			</div>
			<div class="container" id="Paleogene">
			<div class="inner-content">
				<div class="period">[+] Paleogene</div>
				<div class="column-one-name">8</div>
				<div class="column-two-names">
						<div class="resource-left"><div class="circle"></div> 25</div>
						<div class="resource-right">8</div>
				</div>
				<div class="column-two-names">
						<div class="resource-left"></div>
						<div class="resource-right"></div>
				</div>
			</div>
		</div>
		</div>

		<div class="container" id="Mezozoic">
			<div class="inner-content">
				<div class="period">[-] Mezozoic</div>
				<div class="column-one-name">18</div>
				<div class="column-two-names">
						<div class="resource-left">19</div>
						<div class="resource-right">4</div>
				</div>
				<div class="column-two-names">
						<div class="resource-left">1</div>
						<div class="resource-right"></div>
				</div>
			</div>
		</div>
		<div class="circle"></div>
		<div class="diamond"></div>
	</div>
</body>
    );
  }
}

//export default App;
export default MyApp;