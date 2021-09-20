import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
    render() {
        return (
            // Fragment最终会被React解析并丢掉，这样我们就可以避免无用的标签结构
            // Fragment只能有一个key属性，其余的都不允许
            <Fragment key={1}>
                <input type="text" />
                <input type="text" />
            </Fragment>
        )
    }
}
