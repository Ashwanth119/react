
function Child(props:any) {
  return (
    <>
        <p>The msg is from the child {props.msg}</p>
        <input placeholder='Enter the text to modify the original message' onChange={(e)=>{props.setMsg(e.target.value)}}/>
    </>
  )
}

export default Child