import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

class MainSection extends React.Component{
    static propTypes = {
        todosCount: PropTypes.number.isRequired,
        completedCount: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const { todosCount, completedCount, actions } = this.props;

        return (
            <section className="main">
                {
                    !!todosCount &&
                    <span>
                      <input
                          className="toggle-all"
                          type="checkbox"
                          checked={completedCount === todosCount}
                      />
                     <label onClick={actions.completeAllTodos}/>
                    </span>
                }
                <VisibleTodoList />
                {
                    !!todosCount &&
                    <Footer
                        completedCount={completedCount}
                        activeCount={todosCount - completedCount}
                        onClearCompleted={actions.clearCompleted}
                    />
                }
            </section>
        );
    }
}

export default MainSection;