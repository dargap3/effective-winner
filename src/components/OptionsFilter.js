import React from 'react'

class OptionsFilter extends React.Component {
    constructor(props) {
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
        this.props.onOptionChange(event)
    }

    render() {
        
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'}} >
                        <select 
                            value={this.props.selected} 
                            onChange={this.handleOptionChange}
                            name={this.props.name}
                            style={ {width: '100%'} }>
                            {this.props.options.map(option => 
                            <option value={ option.value || '' } key={ option.value }>{ option.name }</option> )}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={`fas fa-${this.props.icon}`}  ></i> 
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsFilter
                        
