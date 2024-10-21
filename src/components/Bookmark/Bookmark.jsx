

const Bookmark = ({bookmark}) => {


    const {title} = bookmark;
  return (
    <div className="">
        <div className="bg-slate-300 p-4 m-4 border-2 rounded-xl">
        <h3 className="text-2xl text-blue-600">Title: {title}</h3>
    </div>
    </div>
  )
}

export default Bookmark