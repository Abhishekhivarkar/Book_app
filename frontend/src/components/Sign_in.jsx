import { useForm } from "react-hook-form"
import axios from "axios"
function Sign_in() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit =async(data) => {
   const userInfo ={
    email : data.email,
    password:data.password,
    cpassword:data.cpassword
   }
await axios.post("http://localhost:4001/user/signup",userInfo)
.then((res)=>{
if (res.data){
  alert("signup successfully")
  console.log("signup successfully")
}
localStorage.setItem("Signup",JSON.stringify(res.data.user))
}).catch((err)=>{
 if (err.response){
  alert("Error :" + err.response.data.message)
 }
 
})

  }


  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <img src="/Images/Sign_in.jpg" className="absolute h-full w-full top-0 left-0" />

        <div className=" dark:border-white z-10 backdrop-blur-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[550px] w-[530px] rounded-lg  flex flex-col  gap-4 shadow-lg">
              <div className="flex justify-center items-center my-[70px]">

                <p className="text-white text-[60px]" style={{
                  fontFamily: "cursive"

                }}>Please Sign in</p>
              </div>

              <div className="w-full flex flex-col items-center">
                <input type="email" placeholder="Enter your email " className="border border-white bg-transparent py-3 px-3 rounded-lg w-[90%] shadow-lg text-white"{...register("email", { required: true }

                )} />

                {
                  errors.email && <span className="text-red-500">This field is required</span>
                }
              </div>


              <div className="w-full flex flex-col items-center">
                <input type="password" placeholder="Enter password " className="border border-white bg-transparent py-3 px-3 rounded-lg w-[90%] shadow-lg text-white"{...register("password", { required: true }

                )} />

                {
                  errors.password && <span className="text-red-500">This field is required</span>
                }
              </div>

              <div className="w-full flex flex-col items-center">
                <input type="password" placeholder="Enter conform password" className="border border-white bg-transparent py-3 px-3 rounded-lg w-[90%] shadow-lg text-white"{...register("cpassword", { required: true }

                )} />

                {
                  errors.cpassword && <span className="text-red-500">This field is required</span>
                }
              </div>

              <div className="flex justify-between  items-center mt-10 px-3">
                <button type="submit" className="px-3 py-2 rounded-lg bg-blue-500 text-white ">Sign Up</button>
                <p>Already Have Account? <a href="login/">Login</a></p>
              </div>
            </div>

          </form>
        </div>

      </div>
    </>

  )
}

export default Sign_in