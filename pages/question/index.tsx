import React from 'react';
import { useRecoilValue } from 'recoil';
import InputQuestion from '../../components/question/InputQuestion';
import WhoMeetQuestion from '../../components/question/WhoMeetQuestion';
import { QUESTION_LIST } from '../../lib/constants/questionList';
import { allAnswerState, questionNumState } from '../../states';

const Question = () => {
	const allAnswer = useRecoilValue(allAnswerState);
	const questionNum = useRecoilValue(questionNumState);
	const currentQuestion = QUESTION_LIST[questionNum];
	console.log(`allAnswer`, allAnswer);

	return (
		<>
			{currentQuestion.type === 'string' && (
				<InputQuestion question={currentQuestion.question} random={currentQuestion.random} />
			)}
			{currentQuestion.type === 'who-meet' && (
				<WhoMeetQuestion question={currentQuestion.question} random={currentQuestion.random} />
			)}
		</>
	);
};

export default Question;
