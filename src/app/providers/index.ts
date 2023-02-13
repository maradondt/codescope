import compose from 'compose-function';
import { withStore } from './withStore';
import { withRouter } from './withRouter';

export const withProviders = compose(withRouter, withStore);
