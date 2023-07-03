import React, { Component } from 'react'
import { ThemeContext } from '../../App'

class ContextClass extends Component {

    themeStyle(dark) {
        return {
            backgroundColor: dark?  'black' : 'white',
            color: dark ? 'white' : 'black',
            padding: '2rem',
            margin: '2rem',
            width: '300px',
            height: '80px',
            textAlign: 'center',
        }
    }

  render() {
    return (
        <ThemeContext.Consumer>
            {dark => {
                return (
                    <div style={this.themeStyle(dark)}> 
                        Class Component.
                    </div>
                )}
            }
        </ThemeContext.Consumer>
    )
  }
}

export default ContextClass