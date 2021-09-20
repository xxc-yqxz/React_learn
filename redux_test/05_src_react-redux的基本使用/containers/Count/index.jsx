// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// import store from '../../redux/store'    // 报错

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 1.mapStateToProps函数返回的是一个对象
// 2.返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3.mapStateToProps用于传递状态
// 此处react-redux调用下面的函数时，已经内部得到了store.getState()的返回值state，并将state作为函数的参数传入
function mapStateToProps(state) {
    // 此处返回值必须为对象，因为props是对象形式
    return {
        count: state
    }
}

// 1.mapDispatchToProps函数返回的是一个对象
// 2.返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3.mapDispatchToProps用于传递操作状态的方法
// 此处react-redux调用下面的函数时，已经内部将了store.dispatch地址作为函数的参数传入
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            // 通知redux执行加法
            dispatch(createIncrementAction(number))
        },
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}

// 让容器组件与UI组件进行关联
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

// store需要从其父组件通过props传入，而不能直接在容器组件中引入，会报错
