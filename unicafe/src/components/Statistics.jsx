import React from 'react'
import StatisticLine from './StatisticLine.jsx'

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0
    const positive = total ? ((good / total) * 100).toFixed(1) : '0.0'
    return (
        total === 0 ? (
            <>
             <h1>statistics</h1>
            <p>No feedback given</p>
            </>
        ) : (
            <>
                <h1>statistics</h1>
                <table>
                    <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={total} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive + ' %'} />
                </tbody>
                </table>
            </>
        )
    )
}

export default Statistics