import Card from "./Card";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";

function Course() {
  const [paidCourses, setPaidCourses] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:4001/book");
        console.log(data);
        setPaidCourses(data);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };
    getBooks();
  }, []);

  const filteredCourses = paidCourses.filter(
    (course) => course.category === "paid"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mt-20">
        <p className="text-3xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500">here! :)</span>
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Ready to take your learning to the next level? Our premium courses are
          created by experts to help you gain real-world skills in reading,
          writing, and creativity. Invest in yourself today and unlock access to
          high-quality lessons, resources, and community support that make
          learning exciting and rewarding!
        </p>

        <a
          href="/"
          className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-pink-600 transition-colors"
        >
          Back
        </a>
      </div>

      {/* Course Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <Card {...course} key={course.id} className="dark:border-white" />
        ))}
      </div>
    </div>
  );
}

export default Course;
