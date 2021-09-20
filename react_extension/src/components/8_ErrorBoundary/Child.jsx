import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        /* users: [
            { id: '001', name: 'tom', age: 18 },
            { id: '002', name: 'xxc', age: 17 },
            { id: '003', name: 'jmz', age: 19 },
        ] */
        users: 'abc'
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map((userObj) => {
                        return <h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>
                    })
                }
            </div>
        )
    }
}
