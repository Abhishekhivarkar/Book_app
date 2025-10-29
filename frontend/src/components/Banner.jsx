import { TfiEmail } from "react-icons/tfi";
function Banner() {
  return (
    <>
      <div className="flex w-[900px] mx-auto flex-1 mt-10 h-[390px]">
        <div className="w-full ">
          <p className="leading-tight mt-20 font-bold text-[34px]">Hello, Welcome here to learn something <span className="text-pink-500">new everyday!!</span></p>

          <p className="mt-5 font-medium">
            Welcome to Book Shop, your gateway to knowledge and imagination. Explore our wide range of books, enhance your skills, and enjoy reading every day. Join our community and start your learning journey today!
          </p>
          <div className="flex gap-2 mt-7">
            <div className="flex border border-black items-center gap-2 w-[350px] rounded-sm bg-white dark:bg-black dark:border-white h-[50px]">
              <TfiEmail className="dark:text-white" />
              <input className=" py-2 outline-none dark:bg-black " placeholder="Enter your email to login" />

            </div>
            <button className="border border-black px-5 rounded-sm font-bold text-[20px] dark:border-white">Go!</button>
          </div>

        </div>
        <div className=" w-full mb-[200px]">
          <img className="" src="/Images/book_image.png" />
        </div>
      </div>
    </>
  )
}

export default Banner