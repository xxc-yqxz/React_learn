import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj);
        this.nameNode.value = ""
        this.ageNode.value = ""
    }

    render() {
        return (
            <div>
                <h2>我是Person组件,上方组件求和为{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                            return <li key={p.id}>名字{p.name}---年龄{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    // 此处由于reducer为经过合并的对象，不再是原本单纯的值，所以要用state.persons进行对象属性获取
    state => ({ persons: state.persons, count: state.count }),   // 映射状态
    {
        addPerson: createAddPersonAction
    }
)(Person)