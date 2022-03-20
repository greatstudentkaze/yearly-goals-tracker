import { useState } from 'react';
import cn from 'classnames';

import Button from '../shared/button';
import InputField from '../shared/input-field';
import DescriptionList from '../description-list';
import DescriptionItem from '../description-list/description-item';

import { ReactComponent as TickIcon } from '../../images/svg/tick.svg';
import { ReactComponent as AddIcon } from '../../images/svg/add.svg';
import { ReactComponent as MinusIcon } from '../../images/svg/minus.svg';

import { GoalDetailsProps } from './index.props';

const GoalDetails = ({
    title,
    description,
    isCompleted,
    amountTarget,
    amount,
}: GoalDetailsProps) => {
    return (
        <form method="post" action="https://echo.htmlacademy.ru">
            <article className="goal-details">
                <div className="goal-details__header">
                    <div className="goal-details__header-wrap">
                        <h1 className="goal-details__title">{title}</h1>
                        <div className={cn('goal-details__status goal-item-status', {
                            'goal-item-status--checked': isCompleted,
                        })}>
                            <span className="visually-hidden">
                                {isCompleted ? 'Completed' : 'In progress'}
                            </span>
                            <span className="goal-item-status__indicator">
                                <TickIcon className="icon" width="20" height="20" />
                            </span>
                        </div>
                    </div>
                    {description && (
                        <p className="goal-details__description">
                            {description}
                        </p>
                    )}
                </div>
                {amountTarget && (
                    <InputField
                        className="goal-details__amount-input"
                        labelText="How much has been achieved so far?"
                        type="number"
                        name={'amount'}
                        id={'amount'}
                        min={0}
                        max={amountTarget}
                        defaultValue={amount}
                        required
                    />
                )}
                <Button className="goal-details__completion-toggle-button">
                    {isCompleted ? 'Mark uncompleted' : 'Mark completed'}
                </Button>
                <Button className="goal-details__submit-button" type="submit" disabled={true}>
                    Submit changes
                </Button>
                <NotesSection />
                <HistorySection />
            </article>
        </form>
    );
};


const AddNoteForm = () => {
    return (
        <form className="goal-details-section__add-note-form goal-details-form">
            <InputField
                className="goal-details-form__textarea"
                type="text"
                labelText="Type note"
                id="note-input"
            />
            <Button className="goal-details-form__submit" type="submit">
                Add note
            </Button>
        </form>
    );
};

const NotesSection = () => {
    const [isAddNoteFormOpened, setIsAddNoteFormOpened] = useState(false);

    const handleToggleAddNoteFormDisplay = () => {
        setIsAddNoteFormOpened((prevState) => !prevState);
    };

    return (
        <section className="goal-details__section goal-details-section">
            <div className="goal-details-section__header-wrap">
                <h2 className="goal-details-section__title">Notes</h2>
                <button
                    className="goal-details-section__icon-button"
                    type="button"
                    aria-label="Add note"
                    onClick={handleToggleAddNoteFormDisplay}
                >
                    {isAddNoteFormOpened
                        ? <MinusIcon className="icon" width="22" height="22" />
                        : <AddIcon className="icon" width="22" height="22" />
                    }
                </button>
            </div>
            {isAddNoteFormOpened && <AddNoteForm />}
            <DescriptionList>
                <DescriptionItem
                    dt={<time dateTime={'2022-03-20'}>20/03/2022</time>}
                    dd={'Get extra pay for overtimes'}
                />
                <DescriptionItem
                    dt={<time dateTime={'2022-02-12'}>12/02/2022</time>}
                    dd={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tortor sed libero egestas aliquet. Aliquam tincidunt euismod dui vitae ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.'}
                />
            </DescriptionList>
        </section>
    )
};

const HistorySection = () => (
    <section className="goal-details__section goal-details-section">
        <h2 className="goal-details-section__title">History</h2>
        <DescriptionList>
            <DescriptionItem
                dt={<time dateTime={'2022-03-20'}>20/03/2022</time>}
                dd={<>
                    {'+'} {'70 000'} <span>({'50 000'} <span>{'->'}</span> {'120 000'})</span>
                </>}
            />
        </DescriptionList>
    </section>
);

export default GoalDetails;