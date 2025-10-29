import Card from "./Card"
import { useState, useEffect } from "react"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
//import Books from "../../public/Books.json"
import axios from "axios"
function MiddleSection() {

  const [toggle, setToggle] = useState(0)
  const [toggle2, setToggle2] = useState(0)
  const [toggle3, setToggle3] = useState(0)

  const [free_book, setFreebook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const book = await axios.get("http://localhost:4001/book")
        console.log(book.data)
        setFreebook(book.data)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    getBook()
  }, [])

  const filtered_data = free_book.filter((data) => data.category === "free")

  function rightToggle() {
    if (free_book.length - 17 == toggle) return false
    setToggle(toggle + 2)
    console.log(free_book.length)
  }

  function leftToggle() {
    if (toggle == 0) return false
    setToggle(toggle - 2)
  }


  function rightToggle2() {
    if (free_book.length - 17 == toggle2) return false
    setToggle2(toggle2 + 2)

  }

  function leftToggle2() {
    if (toggle2 == 0) return false
    setToggle2(toggle2 - 2)
  }


  function rightToggle3() {
    if (free_book.length - 17 == toggle3) return false
    setToggle3(toggle3 + 2)
  }

  function leftToggle3() {
    if (toggle3 == 0) return false
    setToggle3(toggle3 - 2)
  }


  return (
    <>
      <div className="max-w-[900px] mx-auto mt-6">
        <div className="bg-pink-700 px-4 py-2 w-[150px] rounded-lg font-bold text-center mb-5">Free Books</div>
        <div className="flex overflow-hidden">
          {
            filtered_data.map((data, index) => {
              return (
                <>
                  <div className="shrink-0 duration-300 " style={{
                    transform: `translateX(-${toggle * (100)}%)`

                  }}>
                    <Card {...data} key={data.id} />
                  </div>
                </>
              )
            })

          }
        </div>
        <div className="flex justify-center gap-5">
          <button className="size-10 bg-gray-300 rounded-full flex items-center justify-center dark:text-black" onClick={leftToggle} ><FaArrowLeftLong /></button>
          <button className="size-10 bg-gray-300 rounded-full flex items-center justify-center dark:text-black" onClick={rightToggle}><FaArrowRightLong /></button>
        </div>

        <hr className="mt-2 border-[1px]"></hr>
        {/*second row */}

        <div className="flex overflow-hidden mt-10">

          {
            filtered_data.map((data, index) => {
              return (
                <>
                  <div className="shrink-0 duration-300" style={{
                    transform: `translateX(-${toggle2 * (100)}%)`

                  }}>
                    <Card {...data} key={data.id} />
                  </div>
                </>
              )
            })

          }
        </div>
        <div className="flex justify-center gap-5">
          <button className="size-10 bg-gray-300 rounded-full flex items-center justify-center dark:text-black" onClick={leftToggle2} ><FaArrowLeftLong /></button>
          <button className="size-10 bg-gray-300 rounded-full flex items-center justify-center dark:text-black" onClick={rightToggle2}><FaArrowRightLong /></button>
        </div>

        <hr className="mt-2 border-[1px]"></hr>
        {/*second row end*/}

        <div className="flex overflow-hidden mt-10">
          {
            filtered_data.map((data, index) => {
              return (
                <>
                  <div className="shrink-0 duration-300" style={{
                    transform: `translateX(-${toggle3 * (100)}%)`

                  }}>
                    <div key={index}>
                      <Card {...data} />
                    </div>
                  </div>
                </>
              )
            })

          }
        </div>
        <div className="flex justify-center gap-5">
          <button className="size-10 bg-gray-300 rounded-full flex items-center justify-center dark:text-black" onClick={leftToggle3} ><FaArrowLeftLong /></button>
          <button className="size-10 bg-gray-300 rounded-full flex items-center justify-center dark:text-black" onClick={rightToggle3}><FaArrowRightLong /></button>
        </div>

      </div>
    </>
  )
}

export default MiddleSection