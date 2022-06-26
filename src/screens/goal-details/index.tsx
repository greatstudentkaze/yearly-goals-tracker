import { Navigate, useParams } from 'react-router-dom';

import Layout from '../../components/shared/layout';
import GoalDetails from '../../components/goal-details';
import { useAppSelector } from '../../store/hooks';
import { selectGoals } from '../../store/features/yearly-goals/slice';
import { AppRoute } from '../../contants';

const GoalDetailsScreen = () => {
    const { id } = useParams();
    const goals = useAppSelector(selectGoals);

    if (!goals) {
        return (
            <Navigate replace to={AppRoute.ROOT} />
        );
    }

    const goalItem = goals.find((item) => item.id === id);
    if (!goalItem) {
        return (
            <Layout>
                <p>Not found</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <GoalDetails {...goalItem} />
        </Layout>
    );
};

export default GoalDetailsScreen;
