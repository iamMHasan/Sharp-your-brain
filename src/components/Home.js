import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HeaderBanner } from './HeaderBanner';
import QuizCart from './QuizCart';

const Home = () => {
    const quizCatagory = useLoaderData().data
    // console.log(quizCatagory);
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                            <span className="inline-block mb-1 sm:mb-4">
                               Improve your IQ with the test
                            </span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                        </h2>
                        <p className="text-gray-700 lg:text-sm lg:max-w-md">
                            "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
                            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
                            perspiciatis unde omnis iste."
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {
                            quizCatagory.map(quiz => <QuizCart quiz={quiz}></QuizCart>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
// {
//     quizCatagory.map(quiz => <QuizCart quiz={quiz}></QuizCart>)
// }