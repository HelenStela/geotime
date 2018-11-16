import React, { Component } from 'react';
import './Table.css';
import Row from './components/Row';

import chronoColors from './chrono-colors';
import geotime from './geotime';

class Table extends Component {
  render() {
    const rows = [];

    for (let i = 0; i < geotime.length; i++) {
      const data = geotime[i];
      const colors = chronoColors[data.text];
      rows.push(<Row key={data.text} data={data} colors={colors} />)
    }

    return (
      <div className="period-table">
        <div className="table-header">
          <div className="column-one-name header">Source</div>
          <div className="column-two-names header" >
            <div className="name">Reservoir</div>
            <div className="resource-left">Clastics</div>
            <div className="resource-right">Carbonates</div>
          </div>
          <div className="column-two-names header">
            <div className="name">Hydrocarbon</div>
            <div className="resource-left">Gas</div>
            <div className="resource-right">Oil</div>
          </div>
        </div>
        {rows}
       
        
        <div className="circle"></div>
        <div className="diamond"></div>
      </div>
    );
  }
}

export default Table;