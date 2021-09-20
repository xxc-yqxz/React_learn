## 1.todosList案例
1.拆分组件、实例静态组件，注意：className、style的写法
2.不要通过非setState的方式修改数据,操作状态时，push、unshift等方法尽量不用。
3.所有的todo列表交给App管理，因为兄弟组件间暂时不能直接“对话”（状态提升）
4.yarn add nanoid，用于生成数据的唯一标识
5.注意：<input type="checkbox" checked={done} 会有一个警告，写onChange即可
6.注意:defaultChecked和checked的区别，类似的还有：defaultValue和value
7.关于父子之间通信：
    1.【父组件】给【子组件】传递数据：通过props传递
    2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
8.状态在哪里，操作状态的方法就在哪里