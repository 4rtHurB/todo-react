import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoTextInput from '../components/TodoTextInput'
import { addTodo } from '../actions'

class Header extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    handleSave = (text) => {
        if (text.length !== 0) {
            this.props.addTodo(text);
        }
    };

    render() {
        const {addTodo} = this.props;

        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput
                    newTodo
                    onSave={this.handleSave}
                    placeholder="What needs to be done?"
                />
            </header>
        );
    }
}

export default connect(null, { addTodo })(Header);