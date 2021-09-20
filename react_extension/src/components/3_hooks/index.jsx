import React from 'react'

// 类式组件
/* class Demo extends React.Component {

    myRef = React.createRef()

    show = () => {
        console.log(this.myRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={this.show}>点击提示数据</button>
            </div>
        )
    }
} */

// 函数式组件
function Demo() {

    const myRef = React.useRef()

    // 提示输入的回调
    function show() {
        console.log(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}

export default Demo
