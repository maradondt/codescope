import compose from 'compose-function';
import { withStore } from './withStore';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

export const withProviders = compose(withRouter, withStore, withTheme);
