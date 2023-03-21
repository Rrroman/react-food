import { useFetcher } from 'react-router-dom';
import useAlert from '../../hooks/useAlert';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useAlert(data, state);

  return (
    <fetcher.Form
      method="POST"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
