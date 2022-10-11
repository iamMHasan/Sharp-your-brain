import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({ quiz }) => {
    const { name, logo, total ,id} = quiz
    // console.log(quiz);
    return (
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={logo}
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75 flex justify-between">
                <div>
                    <p className="text-sm font-medium tracking-wide text-white">
                        {name}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-medium tracking-wide text-white">
                        Total Q: {total}
                    </p>
                </div>
                <div>
                    <Link to={`/quiz/${id}`}>
                        <button className='bg-yellow-300 hover:bg-yellow-200  px-4 rounded'>Start Quiz</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default QuizCart;