import React, { Component } from 'react';
import './Table.css';
import Row from './components/Row';

import geotime from './geotime';
import chronoColors from './chrono-colors';

class Table extends Component {


  constructor(props){
    super(props)

    const state = {
      rows: []
  }

  
    for (let i = 0; i < geotime.length; i++) {
      const data = geotime[i]; 
      const colors = chronoColors[data.text];
      state.rows.push({ key: data.text, data: data, colors: colors })
    }
    this.state = state;
  }

  render() {
   
    return (
      <div className="period-table">
        <div className="table-header">
          <div />
          <div className="single-column header">Source</div>
          <div className="double-column header">
            <div className="name">Reservoir</div>
            <div className="cell left">Clastics</div>
            <div className="cell right">Carbonates</div>
          </div>
          <div className="double-column header">
            <div className="name">Hydrocarbon</div>
            <div className="cell left">Gas</div>
            <div className="cell right">Oil</div>
          </div>
        </div>
        {this.state.rows.map(item => {
                return (<Row key={item.key} data={item.data} colors={item.colors} />)
            })}          
        {/* <div className="circle"></div>
        <div className="diamond"></div> */}
      </div>
    );
  }
}

export default Table;