import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import goalsReducer from './features/yearly-goals/slice';
import goalsSaga from './features/yearly-goals/sagas';

import userReducer from './features/user/slice';
import userSaga from './features/user/sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        goals: goalsReducer,
        user: userReducer,
    },
    middleware: [saga]
});

function* rootSaga() {
    yield all([
        goalsSaga(),
        userSaga(),
    ])
}

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
