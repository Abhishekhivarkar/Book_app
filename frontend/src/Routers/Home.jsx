import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MiddleSection from "../components/MiddleSection"
function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">

        <header className="shadow-md z-10">
          <Navbar />
        </header>


        <main className="flex-grow">
          <Banner />
          <MiddleSection />
        </main>


        <Footer />
      </div>
    </>
  )
}

export default Home