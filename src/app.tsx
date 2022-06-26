import { Routes, Route, Navigate } from 'react-router';

import { AppRoute } from './contants';
import { useAppSelector } from './store/hooks';
import { selectIsAuthorized } from './store/features/user/slice';

import Login from './screens/login';
import Home from './screens/home';
import CreateGoal from './screens/create-goal';
import GoalDetailsScreen from './screens/goal-details';
import Feedback from './screens/feedback';
const App = () => {
    const isAuthorized = useAppSelector(selectIsAuthorized);

    return (
        <>
            {isAuthorized
                ? (
                    <Routes>
                        <Route path={AppRoute.ROOT} element={<Home />} />
                        <Route path={AppRoute.GOAL_DETAILS} element={<GoalDetailsScreen />} />
                        <Route path={AppRoute.CREATE_GOAL} element={<CreateGoal />} />
                        <Route path={AppRoute.FEEDBACK} element={<Feedback />} />
                        <Route path="/*" element={<Navigate replace to={AppRoute.ROOT} />} />
                    </Routes>
                )
                : (
                    <Routes>
                        <Route path={AppRoute.LOGIN} element={<Login />} />
                        <Route path="/*" element={<Navigate replace to={AppRoute.LOGIN} />} />
                    </Routes>
                )
            }
        </>
    );
};

export default App;
