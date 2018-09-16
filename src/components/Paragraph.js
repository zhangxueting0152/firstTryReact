import React from 'react';

export default class Paragraph extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div style={{height:'30px'}}>
                <p>{this.props.content}</p>
            </div>
        );
    }
}