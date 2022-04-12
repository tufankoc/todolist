import React from 'react'

function Header() {
  return (
    <>
        <header className='header'>
            <h1> Todo APP </h1>
            <form className='search-form'>
                <input className='new-todo' type='text' placeholder='What needs to be done?' autoFocus />
            </form>
        </header>
        <section className='main'>
            <input className='toggle-all' type="checkbox"></input>
            <label for="toggle-all">
			    Mark all as complete
		    </label>
            <ul className='todo-list'>
                <li className='completed'>
                    <div className='view'>
                        <input className='toggle' type="checkbox"></input>
                        <label>Learn JavaScript</label>
                        <button className='destroy'></button>
                    </div>
                </li>
                <li>
                    <div className='view'>
                        <input className='toggle' type="checkbox"></input>
                        <label>Learn React</label>
                        <button className='destroy'></button>
                    </div>
                </li>
                <li>
                    <div className='view'>
                        <input className='toggle' type="checkbox"></input>
                        <label>Have a life!</label>
                        <button className='destroy'></button>
                    </div>
                </li>
            </ul>
        </section>
        <footer className='footer'>
            <span className='todo-count'>
                <strong>2</strong>
                items left
            </span>
            <ul className='filters'>
                <li>
                    <a className='selected'>All</a>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li>
                    <a>Completed</a>
                </li>
            </ul>
            <button className='clear-completed'>Clear completed</button>

        </footer>
    </>

  )
}

export default Header