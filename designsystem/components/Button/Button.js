﻿import React from 'react';

class Button extends React.Component {

    render() {
        let classes = ["button"];
        classes.push(this.props.className);
        return <input className={classes.join(" ")} type="button" value={this.props.text} />;
    }
}
export { Button };
