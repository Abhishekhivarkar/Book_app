function Card(props) {
  return (
    <>
      <div className="w-full overflow-hidden p-3 ">
        <div className="w-[200px]  flex flex-col rounded-lg overflow-hidden mx-auto border border-black p-2 dark:border-white hover:scale-105 duration-300">
          <img className="h-[190px] w-full" src={props.image} />
          <p className="font-bold">Name: {props.name}</p>
          <p className="font-medium">Author: {props.author}</p>

          <p className="font-medium">Description: {props.description}</p>
          <div className="flex justify-between items-center">
            <p className="rounded-lg border border-black py-1 px-3 dark:border-white hover">Rs.{props.price}/-</p>
            <button className="ml-auto border border-black py-1 px-3 rounded-lg dark:border-white hover:bg-blue-400 duration-300">Buy</button>
          </div>
        </div>




      </div>

    </>
  )
}
export default Card