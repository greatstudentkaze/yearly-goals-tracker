import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../index';
import { IGoal } from '../../../interfaces/interfaces';

interface GoalsState {
    items: IGoal[] | null;
    isLoading: boolean;
    error: string;
}

const initialState: GoalsState = {
    items: null,
    isLoading: false,
    error: '',
};

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        fetchGoalsPending: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        fetchGoalsFulfilled: (state, action: PayloadAction<IGoal[]>) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        fetchGoalsRejected: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        createGoalPending: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        createGoalFulfilled: (state, action: PayloadAction<IGoal[]>) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        createGoalRejected: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
})

export const { fetchGoalsPending, fetchGoalsFulfilled, fetchGoalsRejected } = goalsSlice.actions;

export const selectGoals = (state: RootState) => state.goals.items;

export default goalsSlice.reducer;
