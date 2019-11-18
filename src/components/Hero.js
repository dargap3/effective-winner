import React from 'react'

class Hero extends React.Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Hoteles</h1>
                        <h2 className="subtitle">
                            desde el <strong>{`${this.props.filters.dateFrom.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} `}</strong>
                            hasta el <strong>{this.props.filters.dateTo.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                            {this.props.filters.country ? ` en  ${this.props.filters.country} ` : '' }
                            {this.props.filters.price ? ` por $ ${this.props.filters.price}`  : '' }
                            {this.props.filters.rooms ? ` de hasta ${this.props.filters.rooms}  habitaciones` : '' }
                        </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero