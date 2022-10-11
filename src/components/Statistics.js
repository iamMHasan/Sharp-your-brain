import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const data = useLoaderData().data
    const { total } = data

    console.log(data, total);
    return (
        <div className='my-5'>
            <LineChart className='mx-auto' width={1000} height={500} data={data}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" activeDot={{ r: 8 }} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default Statistics;