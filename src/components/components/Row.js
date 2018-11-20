import React, { Component, /*ReactPropTypes*/ } from 'react';
import chronoColors from '../chrono-colors';

class Row extends Component {
    constructor(props) {
        super(props)

        const { data } = props

        const state = {
            rows: [],
            opened: true
        }

        data['value-source-rock'] = Math.floor(Math.random() * 30);
        data['value-clastics'] = Math.floor(Math.random() * 30);
        data['value-carbonates'] = Math.floor(Math.random() * 30);
        data['value-gas'] = Math.floor(Math.random() * 30);
        data['value-oil'] = Math.floor(Math.random() * 30);

        if (data.children) {
            data.children.map(child => {
                const childColors = chronoColors[child.text];
                state.rows.push({ key: child.text, data: child, colors: childColors })
            })
        }

        this.state = state;
    }

    handleClick = () => {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        const { data, colors } = this.props

        return (
            <div key={data.text} className="container" style={{ backgroundColor: colors[0], borderColor: colors[0] }}>
                <div className="inner-content">
                    <div className="period">
                        {this.state.opened ? (<span onClick={this.handleClick}>[-] </span>) :
                            (data.children ? (<span onClick={this.handleClick}>[+] </span>) : (<span onClick={this.handleClick}>[-] </span>)
                            )}
                        {data.text}
                    </div>
                    <div className="cell-wrapper">
                        <div className="single-column" style={{ backgroundColor: colors[1] + '5c' }}>
                            <div className="icon-wrapper">
                                {data['value-source-rock'] > 20 ? (<div className="diamond" style={{
                                    borderColor: '#7BA754', backgroundColor: '#9053A0', width: '12px', height: '12px'
                                }}></div>) :
                                    (data['value-source-rock'] > 10 ? (<div className="diamond" style={{
                                        borderColor: '#7BA754', backgroundColor: '#9053A0', width: '8px', height: '8px'
                                    }}></div>) :
                                        (<div className="diamond" style={{
                                            borderColor: '#7BA754', backgroundColor: '#9053A0', width: '5px', height: '5px'
                                        }}></div>))}
                            </div>
                            {data['value-source-rock']}</div>
                        <div className="double-column" style={{ backgroundColor: colors[1] + '5c' }}>
                            <div className="cell left">
                                <div className="icon-wrapper">
                                    {data['value-clastics'] > 20 ? (<div className="circle" style={{
                                        marginTop: '1px', backgroundColor: 'yellow', width: '16px', height: '16px', borderRadius: '12px'
                                    }}></div>) :
                                        (data['value-clastics'] > 10 ? (<div className="circle" style={{
                                            backgroundColor: 'yellow', width: '10px', height: '10px', borderRadius: '8px'
                                        }}></div>) :
                                            (<div className="circle" style={{
                                                backgroundColor: 'yellow', width: '6px', height: '6px', borderRadius: '4px'
                                            }}></div>))}
                                </div>
                                {data['value-clastics']}</div>
                            <div className="cell right">
                                <div className="icon-wrapper">
                                    {data['value-carbonates'] > 20 ? (<div className="circle" style={{
                                        marginTop: '1px', borderColor: 'lightblue', backgroundColor: '#1B7FBC', width: '16px', height: '16px', borderRadius: '12px'
                                    }}></div>) :
                                        (data['value-carbonates'] > 10 ? (<div className="circle" style={{
                                            borderColor: 'lightblue', backgroundColor: '#1B7FBC', width: '10px', height: '10px', borderRadius: '8px'
                                        }}></div>) :
                                            (<div className="circle" style={{
                                                borderColor: 'lightblue', backgroundColor: '#1B7FBC', width: '6px', height: '6px', borderRadius: '4px'
                                            }}></div>))}
                                </div>
                                {data['value-carbonates']}</div>
                        </div>
                        <div className="double-column" style={{ backgroundColor: colors[1] + '5c' }}>
                            <div className="cell left">
                                <div className="icon-wrapper">
                                    {data['value-gas'] > 20 ? (<div className="circle" style={{
                                        marginTop: '1px', borderColor: '#7BA754', backgroundColor: '#88C86E', width: '16px', height: '16px', borderRadius: '12px'
                                    }}></div>) :
                                        (data['value-gas'] > 10 ? (<div className="circle" style={{
                                            borderColor: '#7BA754', backgroundColor: '#88C86E', width: '10px', height: '10px', borderRadius: '8px'
                                        }}></div>) :
                                            (<div className="circle" style={{
                                                borderColor: '#7BA754', backgroundColor: '#88C86E', width: '6px', height: '6px', borderRadius: '4px'
                                            }}></div>))}
                                </div>
                                {data['value-gas']}</div>
                            <div className="cell right">
                                <div className="icon-wrapper"></div>
                                {data['value-oil']}</div>
                        </div>
                    </div>
                </div>
                {this.state.opened && this.state.rows.map(item => {
                    return (<Row key={item.key} data={item.data} colors={item.colors} opened={this.opened} />)
                })}
            </div>
        )

    }

}


export default Row;

{/* <div className="circle"></div>
        <div className="diamond"></div> */}