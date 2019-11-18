import React from 'react'
import DateFilter from './DateFilter'
import OptionsFilter from './OptionsFilter'


class Filters extends React.Component{
    constructor(props) {
        super(props)

        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleDateChange(event) {
        let payload = this.props.filters
        payload[event.target.name] = new Date(event.target.value)
        if (payload['dateFrom'].valueOf() >= payload['dateTo'].valueOf()) {
          payload['dateTo'] = new Date(payload['dateFrom'].valueOf() + 86400000)
        } else if (payload['dateTo'].valueOf() > payload['dateFrom'].valueOf() + 2592000000) {
          payload['dateTo'] = new Date(payload['dateFrom'].valueOf() + 2592000000)
        }

        this.props.onFilterChange(payload)
      }    
    
    handleOptionChange(event) {
        let payload = this.props.filters
        payload[event.target.name] = event.target.value
        
        this.props.onFilterChange(payload)
    }

    render() {
        return (
            <div className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                        icon="fa-sign-in-alt"
                        date={this.props.filters.dateFrom} 
                        onDateChange={this.handleDateChange}
                        name="dateFrom" />
                </div>

                <div className="navbar-item">
                    <DateFilter
                        icon="fa-sign-out-alt"
                        date={this.props.filters.dateTo}
                        onDateChange={this.handleDateChange}
                        name="dateTo" />
                </div>

                <div className="navbar-item">
                    <OptionsFilter 
                        options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                        selected={this.props.filters.country}
                        onOptionChange={this.handleOptionChange}
                        icon="globe"
                        name="country" />  
                </div>

                <div className="navbar-item">
                    <OptionsFilter 
                        options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected={this.props.filters.price}
                        onOptionChange={this.handleOptionChange}
                        icon="dollar-sign"
                        name="price" /> 
                </div>

                <div className="navbar-item">
                    <OptionsFilter 
                        options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                        selected={this.props.filters.rooms}
                        onOptionChange={this.handleOptionChange}
                        icon="bed"
                        name="rooms" />
                </div>
            </div>
        )
    }

}

export default Filters 