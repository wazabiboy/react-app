
import React, { Component } from 'react'
 


class Header extends Component{
     constructor(props) {
        super(props);
        this.state ={ }
        
    }
    render() {
        return(
            <header>
                Valeur du compter: {this.props.total}
            </header>
        );
    }
}

export default Header;