import GoalListItem from './goal-list-item';
import Loader from '../loader';

import { GoalListProps } from './index.props';

const GoalList = ({ goals, isLoading, error }: GoalListProps) => {
    const renderGoalList = () => {
        if (!goals || isLoading) {
            return (
                <Loader />
            );
        }

        if (error) {
            return (
                <p>{error}</p>
            )
        }

        if (!goals.length) {
            return (
                <p className="goal-list__empty">
                    Your goals for the year were <b>not found</b> 😢 <br/>
                    Try creating a new one <a href={'/'}>here</a>!
                </p>
            );
        }

        return (
            <ul className="goal-list__list">
                {goals.map((goal) => (
                    <GoalListItem key={goal.id} {...goal} />
                ))}
            </ul>
        );
    };

    return (
        <section className="goal-list">
            <h1 className="goal-list__title">
                New Year’s resolutions
            </h1>
            <p className="goal-list__copy">
                View all goals for the year!
            </p>
            {renderGoalList()}
        </section>
    );
};

export default GoalList;
