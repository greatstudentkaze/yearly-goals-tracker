import { call, put, takeEvery } from 'redux-saga/effects'

import Api from '../../../api';
import { authError, IUser, login as loginAction, setUser } from './slice';

export interface ILoginDto {
    email: string;
    password: string;
}

function* login({ payload }: ReturnType<typeof loginAction>) {
    try {
        const user: IUser = yield call(Api.login, payload);
        yield put(setUser(user));
    } catch (e) {
        if (e instanceof Error) {
            yield put(authError(e.message));
        }
    }
}

function* goalsSaga() {
    yield takeEvery(loginAction, login);
}

export default goalsSaga;
