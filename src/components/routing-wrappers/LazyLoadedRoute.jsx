import React, { PureComponent } from 'react';

/**
 * A wrapper component to lazyload components
 */
export class LazyLoadWrapper extends PureComponent {

    state = {
        LazyLoaded: null
    }
    componentWillMount() {
        if (!this.state.LazyLoaded) {

            const { ComponentTarget } = this.props;
            //Execute the funtion that will return a @import promise with the module
            ComponentTarget().then(({ default: Component }) => {
                /**
                 * Set the component to be renderer
                 * this its the component passet throuth the import.
                 */
                this.setState({ LazyLoaded: Component })
            })
        }
    }

    render() {
        const { LazyLoaded } = this.state;
        return (
            LazyLoaded ? <LazyLoaded /> : <div>We are getting your CHUNK </div>
        )
    }
}

