import { DetailedHTMLProps, HTMLProps } from 'react';

import { IGoal } from '../../interfaces/interfaces';

export interface GoalListProps extends DetailedHTMLProps<HTMLProps<HTMLElement>, HTMLElement> {
    goals: IGoal[] | null;
    isLoading: boolean;
    error: string;
}
