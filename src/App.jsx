import { useState } from 'react';
import { clients } from './data/clients';
import MenuScreen from './screens/MenuScreen';
import EditorScreen from './screens/EditorScreen';
import ReactionScreen from './screens/ReactionScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import './App.css';
import { computeCoverage } from './utils/scoreTattoo';
import { getReaction } from './data/reactions';

function App() {
  const [screen, setScreen] = useState('menu');
  const [clientIndex, setClientIndex] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [lastResult, setLastResult] = useState(null);

  const currentClient = clients[clientIndex];

  const handleTattooDone = async (dataUrl) => {
    const coverage = await computeCoverage(currentClient.image, dataUrl);
    const reaction = getReaction(coverage);
    setLastResult({ client: currentClient, image: dataUrl, coverage, ...reaction });
    setScreen('reaction');
  };
  const handleReactionContinue = () => {
    setPortfolio((prev) => [...prev, lastResult]);
    if (clientIndex + 1 < clients.length) {
      setClientIndex(clientIndex + 1);
      setScreen('editor');
    } else {
      setScreen('portfolio');
    }
  };

  const handleRestart = () => {
    setClientIndex(0);
    setPortfolio([]);
    setLastResult(null);
    setScreen('menu');
  };

  return (
    <div className="app">
      {screen === 'menu' && <MenuScreen onStart={() => setScreen('editor')} />}
      {screen === 'editor' && (
        <EditorScreen
          client={currentClient}
          clientNumber={clientIndex + 1}
          totalClients={clients.length}
          onDone={handleTattooDone}
        />
      )}
      {screen === 'reaction' && (
        <ReactionScreen result={lastResult} onNext={handleReactionContinue} />
      )}
      {screen === 'portfolio' && (
        <PortfolioScreen portfolio={portfolio} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;