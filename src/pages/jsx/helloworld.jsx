import { Component } from 'react'

class A extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
    }
  }
  //xx
  componentDidMount() {
    console.log('----页面渲染完成')
    this.refs.box.style.color = 'red'
  }
  componentDidUpdate() {
    console.log('----页面更新')
  }
  add() {
    this.setState((state) => ({ num: state.num + 1 }))
  }
  render() {
    console.log('---this', this)
    const { num } = this.state
    return (
      <div>
        <h1>类组件{num}</h1>
        <span ref="box" onClick={() => this.add()}>
          自增
        </span>
      </div>
    )
  }
}
function B() {
  return <h1>函数式组件</h1>
}

export default A
