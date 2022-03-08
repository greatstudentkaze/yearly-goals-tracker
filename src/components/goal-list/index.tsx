import InputField from '../input-field';

import { ReactComponent as ArrowIcon } from '../../images/svg/arrow.svg';
import { ReactComponent as TickIcon } from '../../images/svg/tick.svg';

import { GoalListProps } from './index.props';

const GoalList = ({ goals }: GoalListProps) => {
    const renderGoalList = () => {
        if (!goals) {
            return (
                <p className="goal-list__empty">
                    Your goals for the year were <b>not found</b> 😢 <br/>
                    Try creating a new one <a href={'/'}>here</a>!
                </p>
            );
        }

        return (
            <ul className="goal-list__list">
                {goals.map(({ id, amountTarget, amount, title, isCompleted }) => (
                    <li key={id} className="goal-list__item goal-list-item">
                        <label className="goal-list-item__status">
                            <input className="visually-hidden" type="checkbox" aria-label={title} defaultChecked={isCompleted} />
                            <span className="goal-list-item__status-indicator">
                                <TickIcon className="icon" width="20" height="20" />
                            </span>
                        </label>
                        <h2 className="goal-list-item__title" title={title}>
                            {title}
                        </h2>
                        <a href={`/goals/${id}`} className="goal-list-item__link">
                            <span className="visually-hidden">Go to goal details</span>
                            <ArrowIcon className="icon" width="30" height="30" />
                        </a>
                        {amountTarget && (
                            <InputField
                                className="goal-list-item__amount-input"
                                labelText="Amount"
                                type="number"
                                id={`amount-input-${id}`}
                                defaultValue={amount}
                            />
                        )}
                    </li>
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
