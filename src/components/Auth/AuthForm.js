import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const userData = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';
  const btnText = isLogin ? 'Login' : 'Create';

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
      <div aria-live="polite">
        <ul>
          {userData &&
            userData.errors &&
            Object.values(userData.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
        </ul>
        {userData && userData.message && <p>{userData.message}</p>}
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="image">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
          {isLogin ? 'Go to create new user' : 'Go to login'}
        </Link>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : btnText}
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
