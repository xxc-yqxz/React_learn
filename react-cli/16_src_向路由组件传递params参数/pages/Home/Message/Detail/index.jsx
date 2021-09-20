import React, { Component } from 'react'

const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，xxc' },
    { id: '03', content: '你好，jmz' },
]
export default class Detail extends Component {
    render() {
        // 接收params参数
        const { id, title } = this.props.match.params
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
