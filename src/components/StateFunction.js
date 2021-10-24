// import React, { useState, useContext, createContext } from 'react'
// // 1.通过createContext来创建一个context句柄
// // 2.通过context.Provider来确定数据共享范围
// // 3.通过value来分发内容
// // 4.在子组件中通过useContext(context)来获取数据
// const Context = createContext(null)
// function StateFunction() {
//   const [num, setNum] = useState(1)
//   return (
//     <div>
//       这是一个函数组件-{num}
//       <Context.Provider value={num}>
//         <Item1></Item1> <Item2></Item2>
//       </Context.Provider>
//     </div>
//   )
// }

// function Item1() {
//   const num = useContext(Context)
//   return <div>子组件1 --{num}</div>
// }
// function Item2() {
//   const num = useContext(Context)
//   return <div>子组件2 --- {num}</div>
// }
// export default StateFunction

import React, { useState, useEffect } from 'react'

function LifeCycle() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('moo')

  useEffect(() => {
    console.log('do something')
  })

  useEffect(() => {
    console.log('done something')
  }, [])

  useEffect(() => {
    console.log('did something')
  }, [count, name])

  function clickHandler() {
    setCount(count + 1)
    setName(name + 'iii')
  }

  return (
    <div>
      你点击了{count} 次 {name}
      <button onClick={clickHandler}> click </button>
    </div>
  )
}

export default LifeCycle
