import React, { Component } from 'react';
import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import './RoundImage.css';

const footer = (
`---
## Created with :hearts: by :rocket: :sparkles: :+1: :zap:
[![@coderkd10](https://pbs.twimg.com/profile_images/668846849525198849/rm0Wyq4c.jpg)](https://twitter.com/kediaabhishek10)`
);

export default class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text : `Enter some **markdown** here` 
        }
    }

    getRawMarkup() {
        return {__html : this.md.render(this.state.text)}
    }

    handleChange(e) {
        this.setState({ text : e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Markdown Editor</h2>
                <h3>Input</h3>
                <textarea
                    onChange={this.handleChange.bind(this)}
                    value={this.state.text}
                />
                <h3>Output</h3>
                <FormatMarkdown text={this.state.text}/>
                <FormatMarkdown className='RoundImage' text={footer}/>
            </div>
        );
    }
}

const FormatMarkdown = ({ text, className }) => {
    const md = MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    }).use(emoji);
    const rawMarkup = md.render(text);
    return (<div className={className ? className : ''} dangerouslySetInnerHTML={{__html : rawMarkup}} />);
}
