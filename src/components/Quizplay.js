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
           <h2 className='text-4xl text-center font-bold my-8'>Let's have a play with <span className='text-[#8147fd] text-5xl'> 
           {name}</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 bg-[#fde047] ">
                {
                    questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
                }
           </div>
        </div>
    );
};

export default Quizplay;