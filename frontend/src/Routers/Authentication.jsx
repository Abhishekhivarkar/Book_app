import Login from "../components/Login"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Authentication() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Login />
      </div>
      <Footer />
    </>
  )
}
export default Authentication