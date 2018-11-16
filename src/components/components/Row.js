import React, { Component, /*ReactPropTypes*/ } from 'react';
import chronoColors from '../chrono-colors';

class Row extends Component {
   childrens = null;
   
      
    
    render() {
         if (this.props.children){
            childrens = this.props.children.map((child) => {
                return (
                    <Row key={child.text} children={child} />
                )
            })
        }
     
     
      return (
            <div className="container">
                {children.map((child) =>
                    <div key={child.text} className="container">
                        <div className="inner-content">
                            <div className="period" style={{ backgroundColor: chronoColors[child.text][0] }}>[-] {children.text}</div>
                            <div className="column-one-name" style={{ backgroundColor: chronoColors[child.text][1] }}>{children['value-source-rock']}</div>
                            <div className="column-two-names" style={{ backgroundColor: chronoColors[child.text][1] }}>
                                <div className="resource-left">{children['value-clastics']}</div>
                                <div className="resource-right">{children['value-carbonates']}</div>
                            </div>
                            <div className="column-two-names" style={{ backgroundColor: chronoColors[child.text][1] }}>
                                <div className="resource-left">{children['value-gas']}</div>
                                <div className="resource-right">{children['value-oil']}</div>
                            </div>
                        </div>
                        {child.children && <Row key={child.text} children={child} /> }
                    </div>
                )}
            </div>
        )



    }

    
}

// Row.propTypes = {
//         children: ReactPropTypes.array.isRequired
//     }

export default Row;