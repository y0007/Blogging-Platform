import React from 'react'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        About Us
      </h1>

      {/* Intro Section */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
        Welcome to <span className="font-semibold text-orange-600">Life & Style Blog</span> – 
        your go-to destination for inspiration, knowledge, and fresh ideas.  
        We write about travel, food, health, technology, and everything that makes 
        life exciting and meaningful.
      </p>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <img
          src="/images/about.jpg"
          alt="about"
          className="rounded-2xl shadow-lg"
        />

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a passionate team of writers and creators who believe that 
            knowledge should be accessible and enjoyable. Our blog covers a 
            wide range of topics – from lifestyle tips to deep insights into 
            personal growth, travel adventures, and the latest trends.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to inspire, educate, and connect with readers around 
            the world. Every post is carefully crafted to add value to your 
            everyday life.
          </p>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          To create meaningful content that motivates and empowers our readers 
          to live a healthier, smarter, and more fulfilling life.  
        </p>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Have questions, suggestions, or want to collaborate?  
          We’d love to hear from you!
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default About;
