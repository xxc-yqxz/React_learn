import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {


    // 更新App的state
    updateAppState = (stateObj) => {
        this.setState({ ...stateObj })
    }

    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        )
    }
}
