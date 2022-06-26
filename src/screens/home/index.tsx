import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchGoalsPending } from '../../store/features/yearly-goals/slice';

import Layout from '../../components/shared/layout';
import GoalList from '../../components/goal-list';

const Home = () => {
    const { items, isLoading, error } = useAppSelector((state) => state.goals);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!items) {
            dispatch(fetchGoalsPending());
        }
    }, [dispatch, items]);

    return (
        <Layout>
            <GoalList goals={items} isLoading={isLoading} error={error} />
        </Layout>
    );
};

export default Home;
