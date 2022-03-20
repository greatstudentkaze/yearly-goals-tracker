import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../app.context';

import Layout from '../../components/layout';
import GoalDetails from '../../components/goal-details';

const GoalDetailsScreen = () => {
    const { id } = useParams();
    const { goals } = useContext(AppContext);

    const goalItem = goals?.find((item) => item.id === id);

    if (!goalItem) {
        return (
            <Layout>
                <p>not found</p>
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
