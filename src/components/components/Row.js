import React, { Component, /*ReactPropTypes*/ } from 'react';
import chronoColors from '../chrono-colors';

class Row extends Component {

    render() {
        let final = [];
        let data = this.props.data;
        function dataRender(father, functionData) {
            if (functionData.children) {
                functionData.children.map(child => {
                    return dataRender(functionData, child);
                })
            }
            const fatherColors = chronoColors[father.text];
            const colors = chronoColors[functionData.text];
            return (
                <div key={father.text} className="container" style={{ backgroundColor: fatherColors[0], borderColor: fatherColors[0] }}>
                    <div className="inner-content">
                        <div className="period">[-] {father.text}</div>
                        <div className="column-one-name" style={{ backgroundColor: fatherColors[1] }}>{father['value-source-rock']}</div>
                        <div className="column-two-names" style={{ backgroundColor: fatherColors[1] }}>
                            <div className="resource-left">{father['value-clastics']}</div>
                            <div className="resource-right">{father['value-carbonates']}</div>
                        </div>
                        <div className="column-two-names" style={{ backgroundColor: fatherColors[1] }}>
                            <div className="resource-left">{father['value-gas']}</div>
                            <div className="resource-right">{father['value-oil']}</div>

                           
                        </div>
                    </div>
                    <div key={functionData.text} className="container" style={{ backgroundColor: colors[0], borderColor: colors[0] }}>
                        <div className="inner-content">
                            <div className="period" >[-] {functionData.text}</div>
                            <div className="column-one-name" style={{ backgroundColor: colors[1] }}>{functionData['value-source-rock']}</div>
                            <div className="column-two-names" style={{ backgroundColor: colors[1] }}>
                                <div className="resource-left">{functionData['value-clastics']}</div>
                                <div className="resource-right">{functionData['value-carbonates']}</div>
                            </div>
                            <div className="column-two-names" style={{ backgroundColor: colors[1] }}>
                                <div className="resource-left">{functionData['value-gas']}</div>
                                <div className="resource-right">{functionData['value-oil']}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       final = data.children.map(child => {
           return dataRender(data, child);
       })
       
       return final;
    }

}


export default Row;