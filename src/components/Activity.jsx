
export default function Activity(data) {
  return (
    <div className="w-1/3 h-[100px] flex flex-col items-center gap-1">
        <img src={data.data.photo} className="object-cover h-[70px] p-1" />
        <h1 className="h-1/3 text-xs">{data.data.name}</h1>
    </div>
  )
}
