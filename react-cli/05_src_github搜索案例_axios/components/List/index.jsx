import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props
        return (
            <div className="row">
                {
                    // 此处由于react中无法写if及for，所以要用三元表达式
                    isFirst ? <h2>输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading.....</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div className="card" key={userObj.id}>
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
