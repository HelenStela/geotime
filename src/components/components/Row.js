import React, { Component } from 'react';

class Row extends Component {
    render() {
        const data = this.props.data;
        const colors = this.props.colors;

        return (
            <div className="container" >
                <div className="inner-content">
                    <div className="period" style={{ backgroundColor: colors[0] }}>[-] {data.text}</div>
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
            </div>
        );
    }
}

export default Row;