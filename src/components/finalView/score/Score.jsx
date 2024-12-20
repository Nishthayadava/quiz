import { useContext } from 'react';
import { QuizContext } from '../../../context/QuizContext';
import { IconReload, IconReportAnalytics } from '@tabler/icons-react';

import './score.css';

export const Score = () => {
  const {
    score,
    shuffleQuestions,
    handleRestart,
    setShowResults,
    showResults,
  } = useContext(QuizContext);

  const percentage = (score / shuffleQuestions.length) * 100;
  const message =
    percentage >= 80
      ? 'Excellent work!'
      : percentage >= 60
      ? 'Good try!'
      : 'Keep practicing!';

  return (
    <article className="score">
      <h2 className="message">{message}</h2>
      <div className="score-circles">
        <div>
          <span>
            {score} / {shuffleQuestions.length}
          </span>
        </div>
        <div>
          <span>{percentage.toFixed()}%</span>
        </div>
      </div>
      <p>
        You answered {score} questions correctly out of a total of{' '}
        {shuffleQuestions.length}, achieving an accuracy percentage of (
        {percentage.toFixed()}%).
      </p>

      <div className="buttons">
        <button
          onClick={() => setShowResults(true)}
          hidden={showResults === true}
        >
          <IconReportAnalytics stroke={2} />
          View results
        </button>
        <button onClick={handleRestart}>
          <IconReload stroke={2} />
          Play again
        </button>
      </div>
    </article>
  );
};
