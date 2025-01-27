import React from "react";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

// Dummy testimonial data
const testimonialsData = [
  {
    id: 1,
    imgURL: user1,
    title: "Superb Excellent",
    feedback:
      "The products are top-notch and the customer service is incredible. Highly recommend!",
    author: "Godavari",
  },
  {
    id: 2,
    imgURL: user2,
    title: "I love it",
    feedback:
      "I loved the fast delivery and the quality of the items. Will definitely shop here again!",
    author: "Nina Williams",
  },
  {
    id: 3,
    imgURL: user3,
    title: "Awesome Experience",
    feedback:
      "Excellent support and beautiful designs. Everything was as advertised!",
    author: "Izabella Idiot",
  },
];

const TestimonialCard = ({ imgURL, title, feedback, author }) => {
  return (
    <div className="testimonial-card bg-white p-6 border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      {/* Avatar */}
      <img
        src={imgURL}
        alt={`Testimonial from ${author}`}
        className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200 mb-4"
      />
      {/* Feedback */}
      <p className="text-gray-600 italic">"{feedback}"</p>
      {/* Author */}
      <h3 className="text-lg font-bold mt-4">{author}</h3>
      <span className="block mt-1 text-sm text-indigo-500">- {title}</span>
    </div>
  );
};

const Testimonial = () => {
  const sectionTitle = "People Say";
  const sectionSubtitle =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam necessitatibus, amet ut corrupti aperiam.";

  return (
    <section id="testimonial" className="py-16 bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">{sectionTitle}</h2>
        {/* Horizontal separator */}
        <div className="flex justify-center mt-2">
          <div className="w-16 h-[2px] bg-indigo-500 rounded"></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full mx-1"></div>
          <div className="w-16 h-[2px] bg-indigo-500 rounded"></div>
        </div>
        <p className="mt-4 text-gray-600">{sectionSubtitle}</p>
      </div>

      {/* Testimonial Cards */}
      <div className="container mx-auto max-w-screen-xl grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
