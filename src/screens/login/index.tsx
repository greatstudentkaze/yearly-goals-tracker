import LoginForm from '../../components/login-form';
import Layout from '../../components/layout';

const Login = () => {
    return (
        <Layout withoutHeader>
            <LoginForm />
        </Layout>
    );
};

export default Login;