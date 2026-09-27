import { useState } from 'react';
import { clients } from './data/clients';
import { computeCoverage } from './utils/scoreTattoo';
import { scoreCraft } from './utils/craft';
import MenuScreen from './screens/MenuScreen';
import EditorScreen from './screens/EditorScreen';
import ReactionScreen from './screens/ReactionScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState('menu');
  const [clientIndex, setClientIndex] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [lastResult, setLastResult] = useState(null);
  const [reputation, setReputation] = useState(0);

  const currentClient = clients[clientIndex];

  const handleTattooDone = async (dataUrl) => {
    const coverage = await computeCoverage(currentClient.image, dataUrl);
    const { band, craftScore, tip } = scoreCraft(coverage, currentClient);
    const quote = currentClient.quotes[band];
    setLastResult({ client: currentClient, image: dataUrl, coverage, band, craftScore, tip, quote });
    setScreen('reaction');
  };
  const handleReactionContinue = () => {
    setPortfolio((prev) => [...prev, lastResult]);
    setReputation((prev) => Math.round((prev * portfolio.length + lastResult.craftScore) / (portfolio.length + 1)));
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
    setReputation(0);
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
        <ReactionScreen
          result={lastResult}
          reputation={reputation}
          clientNumber={clientIndex + 1}
          totalClients={clients.length}
          onNext={handleReactionContinue}
        />
      )}
      {screen === 'portfolio' && (
        <PortfolioScreen portfolio={portfolio} reputation={reputation} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;