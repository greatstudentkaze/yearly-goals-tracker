import { Link } from 'react-router-dom';

import { AppRoute } from '../../../contants';
import { IGoal } from '../../../interfaces/interfaces';

import InputField from '../../shared/input-field';

import { ReactComponent as TickIcon } from '../../../images/svg/tick.svg';
import { ReactComponent as ArrowIcon } from '../../../images/svg/arrow.svg';

const GoalListItem = ({
    id,
    amountTarget,
    amount,
    title,
    isCompleted,
}: IGoal) => (
    <li className="goal-list__item goal-list-item">
        <label className="goal-item-status">
            <input className="visually-hidden" type="checkbox" aria-label={title} defaultChecked={isCompleted} />
            <span className="goal-item-status__indicator">
                <TickIcon className="icon" width="20" height="20" />
            </span>
        </label>
        <h2 className="goal-list-item__title" title={title}>
            {title}
        </h2>
        <Link to={`${AppRoute.GOALS}/${id}`} className="goal-list-item__link">
            <span className="visually-hidden">Go to goal details</span>
            <ArrowIcon className="icon" width="30" height="30" />
        </Link>
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
);

export default GoalListItem;
