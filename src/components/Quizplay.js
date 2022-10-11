import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizplay = () => {
    const quiz = useLoaderData().data
    const questions = useLoaderData().data.questions
    const {name} = quiz

    // console.log(questions)
    return (
        <div className='text-center w-9/12 mx-auto'>
           <h2 className='text-2xl text-center font-bold my-4'>Start the quiz of {name}</h2>
           <div className="grid grid-cols-2 gap-4 bg-slate-300 ">
                {
                    questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
                }
           </div>
        </div>
    );
};

export default Quizplay;