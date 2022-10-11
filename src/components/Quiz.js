import React from 'react';

const Quiz = ({question}) => {
    const {question: ques} = question
    console.log(question);
    return (
        <div className='m-2'>
            <p className='text-xl text-center'>{ques}</p>
            {
                question.options.map(quiz => (
                    <button className='bg-slate-200 m-3'>
                        {quiz}
                    </button>
                ))
            }
        </div>
    );
};

export default Quiz;