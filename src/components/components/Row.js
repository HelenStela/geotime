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
                
                let rows_level_3 = [];
                if (childData.children){
                    rows_level_3 = childData.children.map(grandChildData => {
                        const grandChildColor = chronoColors[grandChildData.text];
                        return(
                            <div className="container" style={{ backgroundColor: grandChildColor[0], borderColor: grandChildColor[0] }}>
                            <div className="inner-content">
                                <div className="period">[-] {grandChildData.text}</div>
                                <div className="column-one-name" style={{ backgroundColor: grandChildColor[1] }}>{grandChildData['value-source-rock']}</div>
                                <div className="column-two-names" style={{ backgroundColor: grandChildColor[1] }}>
                                    <div className="resource-left">{grandChildData['value-clastics']}</div>
                                    <div className="resource-right">{grandChildData['value-carbonates']}</div>
                                </div>
                                <div className="column-two-names" style={{ backgroundColor: grandChildColor[1] }}>
                                    <div className="resource-left">{grandChildData['value-gas']}</div>
                                    <div className="resource-right">{grandChildData['value-oil']}</div>
                                </div>
                            </div>
                        </div> 
                        )
                    }

                    )
                }

                return (
                    <div className="container" style={{ backgroundColor: childColor[0], borderColor: childColor[0] }}>
                        <div className="inner-content">
                            <div className="period">[-] {childData.text}</div>
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
                        {rows_level_3}
                    </div>
                );
            });
        }

        return (
            <div className="container" style={{ backgroundColor: colors[0], borderColor: colors[0] }}>
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
                {rows_level_2}
            </div>
        );
    }
}

export default Row;