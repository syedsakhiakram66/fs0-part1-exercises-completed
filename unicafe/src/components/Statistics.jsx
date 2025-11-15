import React from 'react'

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
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {total}</p>
                <p>average {average}</p>
                <p>positive {positive} %</p>
            </>
        )
    )
}

export default Statistics