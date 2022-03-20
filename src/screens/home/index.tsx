import { useContext, useEffect } from 'react';

import { AppContext } from '../../app.context';

import Layout from '../../components/shared/layout';
import GoalList from '../../components/goal-list';

const Home = () => {
    const { goals, setGoals } = useContext(AppContext);

    useEffect(() => {
        setGoals(mockGoals);
    }, []);

    return (
        <Layout>
            <GoalList goals={goals} />
        </Layout>
    );
};

const mockGoals = [
    {
        id: '1',
        title: 'Earn more money',
        description: 'Review your sent messages or ask a question to get support from our customer service team. Our team will be typically be in touch within the next 24 hours to discuss your query.',
        isCompleted: false,
        amountTarget: 1000000,
        amount: 120000,
    },
    {
        id: '2',
        title: 'Enjoy life 👀',
        isCompleted: false,
    },
    {
        id: '3',
        title: 'Spend less time on social media',
        isCompleted: false,
    },
    {
        id: '4',
        title: 'Get more sleep',
        isCompleted: true,
    },
    {
        id: '5',
        title: 'Enjoy life 👀',
        isCompleted: false,
    },
    {
        id: '6',
        title: 'Enjoy life 👀',
        isCompleted: false,
    },
    {
        id: '7',
        title: 'Enjoy life 👀',
        isCompleted: false,
    },
    {
        id: '8',
        title: 'Enjoy life 👀',
        isCompleted: false,
    },
    {
        id: '9',
        title: 'Enjoy life 👀',
        isCompleted: false,
    },
];


export default Home;