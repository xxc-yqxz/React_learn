import React, { Component } from 'react'
// import qs from 'querystring'    // 这个库的parse方法可以使得 name=tom&age=18（urlencoded编码）变为对象,stringfy则相反


const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，xxc' },
    { id: '03', content: '你好，jmz' },
]
export default class Detail extends Component {
    render() {
        // 接收params参数
        // const { id, title } = this.props.match.params

        // 接收search参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))

        // 接收state参数
        // 下方的两个{}是为了避免state传参方式在浏览器数据被删除时消失的情况
        const { id, title } = this.props.location.state || {}

        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}

        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
