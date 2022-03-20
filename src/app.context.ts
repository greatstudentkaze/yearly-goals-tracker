import { createContext, Dispatch, SetStateAction } from 'react';

import { IGoal } from './interfaces/interfaces';

type GoalsStateType = IGoal[] | null;

export interface IAppContext {
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    goals: GoalsStateType;
    setGoals: Dispatch<SetStateAction<GoalsStateType>>;
}

export const AppContext = createContext<IAppContext>({
    setIsAuthorized: () => {},
    goals: null,
    setGoals: () => {},
});
