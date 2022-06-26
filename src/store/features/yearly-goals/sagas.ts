import { call, put, takeEvery } from 'redux-saga/effects';

import Api from '../../../api';
import { fetchGoalsFulfilled, fetchGoalsRejected } from './slice';
import { IGoal } from '../../../interfaces/interfaces';

function* fetchGoals() {
    try {
        const goals: IGoal[] = yield call(Api.fetchGoals);
        yield put(fetchGoalsFulfilled(goals));
    } catch (e) {
        if (e instanceof Error) {
            yield put(fetchGoalsRejected(e.message));
        }
    }
}

function* goalsSaga() {
    yield takeEvery('goals/fetchGoalsPending', fetchGoals);
}

export default goalsSaga;
