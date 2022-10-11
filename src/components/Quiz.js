import React from 'react';
import { toast } from 'react-toastify';

const Quiz = ({ question }) => {
    const { question: ques } = question
    console.log(question);
    const handleQuiz = correctAns => {
        console.log(correctAns);
        if (correctAns === question.correctAnswer) {
           toast.success('correct answer')
           alert('correct answer')
        } else{
            alert('wrong answer')
        }


    }
    return (
        <div className='m-2 p-3 border-neutral-500 border border-2 rounded'>
            <p className='text-xl text-center'>{ques}</p>
            {
                question.options.map((quiz, index) => (

                    <button
                        key={index}
                        // onClick={handleQuiz}
                        onClick={() => { handleQuiz(quiz) }}
                        className='bg-slate-200 hover:bg-slate-300 m-3 p-3 rounded text-bold'>
                        {quiz}
                    </button>
                ))
            }
        </div>
    );
};

export default Quiz;