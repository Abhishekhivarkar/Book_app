
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>

      <footer className=" text-black dark:text-white b-0 mt-2">
        <hr className="border-[2px] mb-5"></hr>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold  mb-3">Book Store</h2>
            <p className="text-sm leading-relaxed">
              Your gateway to knowledge and imagination. Discover, learn, and grow every day with our curated collection of books and resources.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
              <li><a href="/course" className="hover:text-pink-400 transition">Courses</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">About</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold  mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition"><FaFacebook size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition"><FaInstagram size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition"><FaTwitter size={22} /></a>
            </div>
            <p className="text-sm mt-4">© {new Date().getFullYear()} Book Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}