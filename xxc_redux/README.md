## 1.求和案例_redux迷你版
		(1).去除Count组件自身的状态
		(2).src下建立:
					-src
						-redux
							-store.js
							-count_reducer.js
		(3).store.js：
					1).引入redux中的createStore函数，创建一个store
					2).createStore调用时要传入一个为其服务的reducer
					3).记得暴露store对象
		(4).count_reducer.js：
					1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
					2).reducer有两个作用：初始化状态，加工状态
					3).reducer被第一次调用时，是store自动触发的，传递的preState是undefined
		(5).在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
				备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## 2.求和案例_redux完整版
		新增文件：
			1.count_action.js 专门用于创建action对象
			2.constant.js 放置编码容易疏忽写错action中的type

## 3.求和案例_redux异步action版
		 (1).明确：延迟的动作不想交给组件自身，想交给action
		 (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
		 (3).具体编码：
		 			1).yarn add redux-thunk，并配置在store中
					 	//引入createStore，用于创建store对象：
						 
								import {createStore,applyMiddleware} from 'redux'
								import countReducer from './count_reducer'
								import thunk from 'redux-thunk'
								export default createStore(countReducer,applyMiddleware(thunk))
	
		 			2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
		 			3).异步任务有结果后，分发一个同步的action去真正操作数据。
		 (4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

## 4.求和案例_react-redux基本使用
			(1).明确两个概念：
						1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
						2).容器组件：负责和redux通信，将结果交给UI组件。
			(2).如何创建一个容器组件————靠react-redux 的 connect函数
							connect(mapStateToProps,mapDispatchToProps)(UI组件)
								-mapStateToProps:映射状态，返回值是一个对象
								-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
			(3).备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入


## 5.求和案例_react-redux优化
			1.整合UI组件与容器组件
			2.使用Provider批量给所有的容器组件传递store
			3.mapDispatchToProps也可以写成一个对象，形如：
					jia:加的actionCreator
					jian:减的actionCreator
					xxxx:yyyyy
					备注：xxx是传递给UI组件props的key，yyyy是对应业务逻辑的action
			4.一个组件要和redux通信，分为几步：
						（1）在组件中引入connect,使用connect(映射状态，映射操作状态的方法)(UI组件)
						（2）检查index.js中使用使用Provider提供store
						（3）根据是否操作状态，决定是否引入action

## 6.求和案例_react-redux数据共享版
			(1).定义一个Pserson组件，和Count组件通过redux共享数据。
			(2).为Person组件编写：reducer、action，配置constant常量。
			(3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
					合并后的总状态是一个对象！！！
			(4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。

## 7.求和案例_react-redux开发者工具的使用
			(1).yarn add redux-devtools-extension
			(2).store中进行配置
					import {composeWithDevTools} from 'redux-devtools-extension'
					const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

## 8.求和案例_react-redux最终版
			(1).所有变量名字要规范，尽量触发对象的简写形式。
			(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

## Hooks

## 1.React Hook/Hooks是什么?
	(1).Hook是React 16.8.0版本增加的新特性/新语法
	(2).可以让你在函数组件中使用state以及其他的React特性

## 2.常用的几个Hook
	(1).State Hook:React.useState()
	(2).Effect Hook:React.useEffect()
	(3).Ref Hook:React.useRef()

## 3.State Hook
	(1).State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
	(2).语法: const [xxx,stateXxx] = React.useState(initValue)
	(3).useState()说明:
		参数：第一次初始化指定的值在内部作缓存
		返回值：包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数
	(4).setXxx()2种写法:
		setXxx(newValue):参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
		setXxx(value=>newValue):参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
## 4.Effect Hook
	(1).Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命钩子)
	(2).React中的副作用操作:
		发ajax请求数据获取
		设置订阅/启动定时器
		手动更改真实DOM
	(3).语法和说明:
		useEffect(()=>{
			// 在此可以执行任何带副作用操作
			return ()=>{
				// 在此做一些收尾工作，比如清除定时器/取消订阅等
			}
		},[stateValue]) // 如果指定的是[],回调函数只会在第一个render()后执行
	(4).可以把useEffect Hook 看做如下三个函数的组合
		componentDidMount()
		componentDidUpdate()
		componentWillUnmount()

## 5. Ref Hook
	(1).Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其它数据
	(2).语法:const refContainer = useRef(initialValue)
	(3).作用:保存标签对象，功能与React.createRef()一样。
