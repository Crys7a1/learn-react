const hello = 'hello'
const title = 'cs'

function fullname(user) {
  return `${user.firstname} ${user.lastname}`
}
//X
const ele = (
  <div>
    <h1>hello</h1>
  </div>
)
function handle(arg) {
  if (arg) {
    return <div>{arg}</div>
  } else {
    return <div>hello</div>
  }
}

function B() {
  return (
    <div title={title}>
      <h1>{hello + '吗'}?</h1>
      <h1>{`${hello}吗?`}</h1>
      <h1>{fullname({ firstname: 'c', lastname: 's' })}</h1>
      <hr />
      <h1>{handle(<span>大家好</span>)}</h1>
    </div>
  )
}

export default B
