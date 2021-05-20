import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 定义一个Count组件(类式组件)
/* class Count extends Component {

    state = { count: 0 }

    myRef = React.createRef()

    add = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
    }

    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))

    }

    show = () => {
        alert(this.myRef.current.value)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { count } = this.state
            this.setState({ count: count + 1 })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
                //  <input ref="input1" type="text" /> 
                //  <input ref={c => this.inputNode = c} type="text" /> 
                <input ref={this.myRef} type="text" />

                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>点我卸载组件</button>
                <button onClick={this.show}>点我提示输入的内容</button>
            </div>
        )
    }
} */

// 定义一个Count组件(函数式组件)
function Count() {
    console.log('Count'); // 1+n
    // let inputNode
    // let myRef = React.createRef()
    let myRef2 = React.useRef(99) // useRef相比于createRef，可以传初始值，但是如果传了初始值，就不要在为其赋值

    const [count, setCount] = React.useState(0) // React底层在第一次执行时就将此句缓存下来了。后面再次调用函数时，不会在执行此条语句。
    const [name, setName] = React.useState('tom')

    function add() {
        // setCount(count + 1)  //此种写法虽简单，但是不要在回调中使用，会造成状态不更新
        setCount(count => count + 1)
    }

    function changeName() {
        setName('jack')
    }

    function death() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        // alert(inputNode.value)
        // alert(myRef.current.value)
        // alert(myRef2.current.value)
        alert(myRef2.current)
        console.log(myRef2);
    }

    // 使用React.useEffect，可以在函数式组件中使用生命周期钩子
    React.useEffect(() => { //useEffect传入的第一个参数相当于componetDidMount和componentDidUpdate
        console.log('componentDidMount');
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => { // return的这个函数相当于componentWillUnmount
            console.log('componentWillUnmount');
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h2>当前求和为{count}---{name}</h2>
            {/* <input ref={c => inputNode = c} type="text" /> */}
            {/* <input ref={myRef2} type="text" /> */}
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={death}>卸载组件</button>
            <button onClick={show}>点我提示输入</button>
        </div>
    )
}

export default Count
