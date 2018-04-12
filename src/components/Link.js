import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Link extends React.Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        setFilter: PropTypes.func.isRequired
    };

    render() {
        const { active, children, setFilter } = this.props;

        return (
            <a
                className={classnames({ selected: active })}
                style={{ cursor: 'pointer' }}
                onClick={() => setFilter()}
            >
                {children}
            </a>
        );
    }
}

export default Link;
