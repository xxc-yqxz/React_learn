import React, { Component } from 'react'
import qs from 'querystring'

const mockData = [
    { id: '001', content: '你好，上贵都' },
    { id: '002', content: '你好，我未来的女朋友' },
    { id: '003', content: '你好，我未来的男朋友' }
]

export default class Detail extends Component {
    render() {

        // 获取传递过来的params参数
        // const { id, title } = this.props.match.params

        // 获取传递过来的search参数
        const { search } = this.props.location
        const { id, title } = (qs.parse(search.slice(1)))

        const result = mockData.find(detailObj => detailObj.id == id)

        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{result.content}</li>
            </ul>
        )
    }
}
