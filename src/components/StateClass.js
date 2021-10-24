import React from 'react'

class StateClass extends React.Component {
  state = {
    name: '类',
  }

  test() {
    let p = new Promise(() => {}).then(
      () => {},
      () => {}
    )
  }

  render() {
    return <div>这是一个组件-{this.state.name}</div>
  }
}

export default StateClass
