// rafce

const Post = (props) => {
    console.log(props.children)

  return (
    <div className="border border-amber-600 p-5">
        {props.children}
    </div>
  )
}

export default Post