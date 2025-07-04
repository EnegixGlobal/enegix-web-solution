import React from 'react'

function ReviewSection() {
 return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-gray-700 text-sm font-medium">WHAT CUSTOMERS SAY</h2>
          <div className="text-2xl font-bold text-green-500">A stellar rating of 4.8 out of 5</div>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 text-xl">★★★★★</span>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-lg font-semibold">New Digital Solutions Reviews</h3>
        <span className="text-green-500 font-medium">4.9 ★★★★★ 12 REVIEWS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <span className="text-green-500 text-xl">★★★★★</span>
            <span className="text-gray-600 ml-2">5.0</span>
          </div>
          <p className="text-gray-700 text-sm">"New Digital provided swift action to resolve our issue effectively."</p>
          <p className="text-gray-500 text-xs mt-1">Project Manager, TechCorp</p>
          <p className="text-gray-400 text-xs mt-1">✔ Verified Review</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <span className="text-green-500 text-xl">★★★★★</span>
            <span className="text-gray-600 ml-2">5.0</span>
          </div>
          <p className="text-gray-700 text-sm">"Their support is outstanding and very impressive."</p>
          <p className="text-gray-500 text-xs mt-1">IT Coordinator, GreenLeaf</p>
          <p className="text-gray-400 text-xs mt-1">✔ Verified Review</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <span className="text-green-500 text-xl">★★★★☆</span>
            <span className="text-gray-600 ml-2">4.0</span>
          </div>
          <p className="text-gray-700 text-sm">"Great service, though there’s room for improvement."</p>
          <p className="text-gray-500 text-xs mt-1">CEO, InnovateNow</p>
          <p className="text-gray-400 text-xs mt-1">✔ Verified Review</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
          Read more reviews →
        </button>
      </div>
    </div>
  );
}

export default ReviewSection
