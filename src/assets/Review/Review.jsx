import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReviewCard } from './ReviewCard';
import { FaStar } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Review = ({onSubmitReview }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

      // ========== add review part ===============
      const [name, setName] = useState('');
      const [rating, setRating] = useState(0);
      const [comment, setComment] = useState('');
    
      const handleRatingClick = (index) => {
        setRating(index + 1);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name && rating && comment) {
          setName('');
          setRating(0);
          setComment('');
          // ===== toast
          toast.success('Thanks for your comment!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });

          console.log(e.target.value)
        } else {
          alert('Please fill out all fields before submitting.');
        }
      };



    // ================ review variable part ==========
      const reviews = [
        {
          name: 'John Doe',
          rating: 5,
          comment: 'Absolutely loved it! The best experience ever.',
          date: 'August 28, 2024',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          name: 'Jane Smith',
          rating: 4,
          comment: 'Great service, will definitely come back!',
          date: 'August 27, 2024',
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          name: 'Emily Johnson',
          rating: 4.5,
          comment: 'A delightful experience, highly recommended.',
          date: 'August 25, 2024',
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
          name: 'Michael Brown',
          rating: 4,
          comment: 'Very good experience, though a bit pricey.',
          date: 'August 24, 2024',
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
          name: 'Linda Wilson',
          rating: 5,
          comment: 'Outstanding service, truly exceptional!',
          date: 'August 22, 2024',
          avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
      ];
    
  return (
    <>
{/* =========== reviews part ============ */}
    <div className="min-h-screen pt-[70px] p-10">
      <h1 className="text-3xl font-bold text-center text-black mb-12"> Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
    {/* ================ add review ================ */}
    <div data-aos="zoom-in" className="max-w-md bg-white shadow-lg rounded-xl p-8 mx-auto mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value) } 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Rating</label>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer text-2xl ${
                  rating > index ? 'text-yellow-500' : 'text-gray-300'
                } transition-colors duration-200`}
                onClick={() => handleRatingClick(index)}/>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 font-semibold mb-2">Your Review</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-24 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Share your experience"></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 active:scale-105 transition-colors duration-200">
          Submit Review
        </button>
      </form>
    </div>

    </>
  )
}
