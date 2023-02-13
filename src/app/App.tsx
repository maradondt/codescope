import { AppRoutes } from '../pages';
import { withProviders } from './providers';

function App() {
  return <AppRoutes />;
}

export default withProviders(App);
