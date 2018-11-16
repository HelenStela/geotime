import React, { Component } from 'react';
import chronoColors from '../chrono-colors';

class Row extends Component {
    render() {
        const data = this.props.data;
        const colors = this.props.colors;

        let rows_level_2 = [];
        if (data.children) {
            rows_level_2 = data.children.map(childData => {
                const childColor = chronoColors[childData.text];
                
                return (
                    <div className="container" >
                        <div className="inner-content">
                            <div className="period" style={{ backgroundColor: childColor[0] }}>[-] {childData.text}</div>
                            <div className="column-one-name" style={{ backgroundColor: childColor[1] }}>{childData['value-source-rock']}</div>
                            <div className="column-two-names" style={{ backgroundColor: childColor[1] }}>
                                <div className="resource-left">{childData['value-clastics']}</div>
                                <div className="resource-right">{childData['value-carbonates']}</div>
                            </div>
                            <div className="column-two-names" style={{ backgroundColor: childColor[1] }}>
                                <div className="resource-left">{childData['value-gas']}</div>
                                <div className="resource-right">{childData['value-oil']}</div>
                            </div>
                        </div>
                    </div>
                );
            });
        }

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
                {rows_level_2}
            </div>
        );
    }
}

export default Row;