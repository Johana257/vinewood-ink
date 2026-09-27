import { useRef, useState, useEffect } from 'react';
import ImageEditor from '@unlayer/react-image-editor';

export default function EditorScreen({ client, clientNumber, totalClients, onDone }) {
  const editorRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setShowIntro(true);
    const t = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(t);
  }, [client]);
  const handleSave = ({ dataUrl }) => {
    onDone(dataUrl);
  };

if (showIntro) {
  return (
    <div className="mission-intro">
      <p className="mission-label">JOB {clientNumber} OF {totalClients}</p>
      <h1 className="mission-title">{client.name}</h1>
      <p className="mission-brief">{client.request}</p>
    </div>
  );
}

  return (
    <div className="editor-wrap">
      <div className="shift-progress">
        <div className="shift-progress-bar" style={{ width: `${(clientNumber / totalClients) * 100}%` }} />
      </div>
      <div className="client-brief">
        <p className="client-label">Client {clientNumber} of {totalClients}</p>
        <h2>{client.name}</h2>
        <p className="client-request">{client.request}</p>
      </div>
      <ImageEditor
        ref={editorRef}
        image={client.image}
        minHeight="600px"
        options={{
          theme: 'dark',
          translations: {
            en: {
              'image_editor.tools.crop': 'Placement',
              'image_editor.tools.resize': 'Scale',
              'image_editor.tools.draw': 'Linework',
              'image_editor.tools.text': 'Lettering',
              'image_editor.tools.shapes': 'Stencil',
              'image_editor.tools.stickers': 'Flash Sheet',
              'image_editor.tools.frame': 'Border',
              'image_editor.toolbar.save': 'Finish Piece',
            },
          },
          features: {
            imageEditor: {
              tools: {
                filter: { icon: 'droplet' },
                crop: { icon: 'crop' },
                draw: { icon: 'pen-nib' },
                text: { icon: 'font' },
                shapes: { icon: 'shapes' },
                stickers: { icon: 'star' },
                frame: { icon: 'square' },
              },
            },
          },
        }}
        onSave={({ dataUrl }) => onDone(dataUrl)}
        onError={(err) => console.error('Editor error:', err)}
      />
    </div>
  );
}