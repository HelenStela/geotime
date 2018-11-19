import React, { Component, /*ReactPropTypes*/ } from 'react';
import chronoColors from '../chrono-colors';

class Row extends Component {

    render() {
        let subRows = [];
        const data = this.props.data;
        const colors = this.props.colors;
        if (data.children) {
            data.children.map(child => {
                const childColors = chronoColors[child.text];
                subRows.push(<Row key = {child.text} data={child} colors={childColors} />)
            })
        }
        
        return(
            <div key={data.text} className="container" style={{ backgroundColor: colors[0], borderColor: colors[0] }}>
            <div className="inner-content">
                <div className="period">[-] {data.text}</div>
                <div className="column-one-name" style={{ backgroundColor: colors[1] }}>{data['value-source-rock']}</div>
                <div className="column-two-names" style={{ backgroundColor: colors[1] }}>
                    <div className="resource-left">{data['value-clastics']}</div>
                    <div className="resource-right">{data['value-carbonates']}</div>
                </div>
                <div className="column-two-names" style={{ backgroundColor: colors[1] }}>
                    <div className="resource-left">{data['value-gas']}</div>
                    <div className="resource-right">{data['value-oil']}</div>                   
                </div>
            </div>
            {subRows}
        </div>
        )

        }

}


export default Row;