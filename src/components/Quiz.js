import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Quiz = ({ question }) => {
    const { question: ques } = question
    console.log(question);

    const handleQuiz = correctAns => {
        if (correctAns === question.correctAnswer) {
            toast.success('correct answer', { autoClose: 500, position: "top-center", theme: "dark", })
        } else {
            toast.error('wrong answer', { autoClose: 500, position: "top-center", theme: "dark", })
        }


    }
    return (
        <div className='m-2 p-3 border-neutral-500 border border-2 rounded'>
            <p className='text-xl text-center'>{ques}</p>
            {
                question.options.map((quiz, index) => (

                    <ul className='grid '>
                        <button
                            key={index}
                            onClick={() => { handleQuiz(quiz) }}
                            className='bg-slate-200 hover:bg-slate-300 m-3 p-3 rounded text-bold'>
                            {quiz}
                        </button>
                    </ul>
                ))
            }
            <ToastContainer />
        </div>
    );
};

export default Quiz;