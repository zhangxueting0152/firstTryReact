import React from 'react';

export default class Input extends React.Component{
    constructor(props) {
        super(props);
        
    }
    changeContent = (e) => {
        this.props.changeContent(e);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeContent}/>
            </div>
        );
    }
}