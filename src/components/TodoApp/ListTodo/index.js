import React from 'react'

function ListTodo() {
    return (
        <section class="main">
            <input property="toggleAll" id="toggle-all" class="toggle-all" type="checkbox" checked="[todoLeft = 0]" />
            <label for="toggle-all" mv-action="set(done, !toggleAll)">
                Mark all as complete
            </label>
            <ul class="todo-list">
                <li mv-multiple="todo" class="[if(done, 'completed')]"
                    hidden="[(done and activeFilter = 'active') or (!done and activeFilter = 'completed')]">
                    <div class="view">
                        <input property="done" class="toggle" type="checkbox" />
                        <label property="text">Taste JavaScript</label>
                        <button class="destroy" mv-action="delete(todo)"></button>
                    </div>
                </li>
                <li mv-multiple="todo">
                    <div class="view">
                        <input property="done" class="toggle" type="checkbox" />
                        <label property="text">Taste JavaScript</label>
                        <button class="destroy" mv-action="delete(todo)"></button>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default ListTodo;
