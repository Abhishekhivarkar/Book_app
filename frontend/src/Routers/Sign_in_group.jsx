import Sign_in from "../components/Sign_in"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Sign_in_group() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Sign_in />
      </div>
      <Footer />

    </>
  )
}

export default Sign_in_group