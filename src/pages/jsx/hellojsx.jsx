const ele = (
  <div className="cs" title="qf">
    <span>hello</span>
    <a href="www.baidu.com">baidu</a>
  </div>
)
//X
const view = React.createElement('div', { className: 'cs', title: 'cs' }, [
  React.createElement('span', { key: 1 }, 'hello'),
  React.createElement('a', { href: 'www.baidu.com,key:2' }, 'cs'),
])

let element1 = <div>hello</div>
//xxx
const element2 = React.createElement('div', {}, 'hello')

console.log('element1', element1)
console.log('element2', element2)

function B(props) {
  return ele
}
export default B
