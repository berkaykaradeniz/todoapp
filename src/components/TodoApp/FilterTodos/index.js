import React from 'react'

function FilterTodos() {
    return (
        <footer class="footer">
            <meta property="todoDone" content="[count(todo where done)]" />
            <meta property="todoLeft" content="[count(todo where !done)]" />
            <span class="todo-count">
                <strong mv-value="todoLeft">0 </strong>
                left
            </span>
            <meta property="activeFilter" content="all" mv-storage="none" />
            <ul class="filters">
                <li>
                    <a class="[if(activeFilter = 'all', 'selected')]" mv-action="set(activeFilter, 'all')">All</a>
                </li>
                <li>
                    <a class="[if(activeFilter = 'active', 'selected')]" mv-action="set(activeFilter, 'active')">Active</a>
                </li>
                <li>
                    <a class="[if(activeFilter = 'completed', 'selected')]"
                        mv-action="set(activeFilter, 'completed')">Completed</a>
                </li>
            </ul>
            <button hidden="[todoDone = 0]" class="clear-completed" mv-action="delete(todo where done)">
                Clear completed
            </button>
        </footer>
    )
}
export default FilterTodos;
