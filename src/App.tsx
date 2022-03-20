import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { AppContext } from './app.context';
import { IGoal } from './interfaces/interfaces';
import { AppRoute } from './contants';

import Login from './screens/login';
import Home from './screens/home';
import CreateGoal from './screens/create-goal';
import GoalDetailsScreen from './screens/goal-details';
import Feedback from './screens/feedback';

const App = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [goals, setGoals] = useState<IGoal[] | null>(null);

    return (
        <AppContext.Provider value={{ setIsAuthorized, goals, setGoals }}>
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
        </AppContext.Provider>
    );
};

export default App;
