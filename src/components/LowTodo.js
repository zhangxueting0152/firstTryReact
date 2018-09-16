import React from 'react';
import Paragraph from './Paragraph';
import Input from './Input';

export default class LowTodo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }
    changeContent = (e) => {
        let content = e.target.value;
        this.setState({
            content: content
        });
    }
    render() {
        return (
            <div>
                <Paragraph content={this.state.content}></Paragraph>
                <Input changeContent={this.changeContent}/>
            </div>
        );
    }
}