
import { ContextProvider } from './Component/Store/ContextProvider';
import Header from './Component/Header/Header';
import List from './Component/Header/List';

function App() {
  return (
    <ContextProvider>
      <Header />
      <List />
    </ContextProvider>
  );
}

export default App;
