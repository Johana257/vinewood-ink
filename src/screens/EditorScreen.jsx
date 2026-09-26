import { useRef } from 'react';
import ImageEditor from '@unlayer/react-image-editor';

export default function EditorScreen({ client, clientNumber, totalClients, onDone }) {
  const editorRef = useRef(null);

  const handleSave = ({ dataUrl }) => {
    onDone(dataUrl);
  };

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
            'image_editor.tools.filter': 'Shading',
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
        }}
        onSave={handleSave}
        onError={(err) => console.error('Editor error:', err)}
        />
    </div>
  );
}