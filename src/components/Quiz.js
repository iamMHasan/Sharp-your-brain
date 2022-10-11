import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ question }) => {
    const { question: ques } = question
    console.log(question);

    // eye button for rigtht ans
    const [status , setStatus] = useState(false)
    // quiz validation
    const handleQuiz = correctAns => {
        if (correctAns === question.correctAnswer) {
            toast.success('correct answer', { autoClose: 500, position: "top-center", theme: "dark", })
        } else {
            toast.error('wrong answer', { autoClose: 500, position: "top-center", theme: "dark", })
        }


    }
    return (
        <div className='m-2 p-3 border-neutral-500 border border-2 rounded'>
            {
                status ? <h1 className='bg-red-700 p-3 text-white'>{question.correctAnswer}</h1> : null
            }
            <div className="flex">
                <div>
                    <p className='text-xl text-center'>{ques}</p>
                </div>

                <div>
                    <svg
                    onClick={()=> setStatus(!status)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>


                </div>
            </div>

            {
                question.options.map((quiz, index) => (

                    <ul className='grid '>
                        <button
                            key={index}
                            onClick={() => { handleQuiz(quiz) }}
                            className='bg-[#ffe3df] hover:bg-[#8147fd51] m-3 p-3 rounded text-bold'>
                            {quiz}
                        </button>
                    </ul>
                ))
            }

        </div>
    );
};

export default Quiz;