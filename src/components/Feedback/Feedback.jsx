import {useState} from 'react'

import { FeedbackOptions } from './FeedbackOptions'
import { Section } from './Section';
import { Statistics } from './Statistics'
import { Notification } from './Notification'
import styles from './Feedback.module.css'


export function Feedback() {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })


    function addFeedback(option) {
    setState(prevState => ({...prevState, [option]: prevState[option] + 1}))
    };
    function countTotalFeedback(good, neutral, bad) {
            return (good + neutral + bad)
        }

    function countPositiveFeedbackPercentage (good, total)  {
            return ((good / total) * 100)
        }

    
        if (!state.good && !state.neutral && !state.bad) {
            return (
            <div className={styles.wrapper}>
               
                
                <Section title = "Please leave feedback"></Section>
                    <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={addFeedback}></FeedbackOptions>
                     <Notification message="There is no feedback"></Notification>
            
               
            </div>
    )
        } else {
            return (
            <div className={styles.wrapper}>
             
                <Section title="Please leave feedback"></Section>
                <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={addFeedback}></FeedbackOptions>
            
                <Section title="Statistics"></Section>
                <Statistics
                    good={state.good}
                    neutral={state.neutral}
                    bad={state.bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
                ></Statistics>
            </div>
        )
        }
    }

   