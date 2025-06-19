import React, { useState } from 'react';
import Plano from './pages/Plano';
import Progresso from './pages/Progresso';
import Fotos from './pages/Fotos';
import Compras from './pages/Compras';
import Perfil from './pages/Perfil';

const abas = ['Plano', 'Progresso', 'Fotos', 'Compras', 'Perfil'];
const componentes = {
  Plano,
  Progresso,
  Fotos,
  Compras,
  Perfil
};

export default function App() {
  const [aba, setAba] = useState('Plano');
  const AbaAtual = componentes[aba];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 shadow bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Plano Alimentar - Wesley</h1>
      </header>
      <main className="p-4">
        <AbaAtual />
      </main>
      <nav className="fixed bottom-0 w-full bg-gray-200 dark:bg-gray-800 flex justify-around py-2">
        {abas.map((nome) => (
          <button
            key={nome}
            onClick={() => setAba(nome)}
            className={`px-2 py-1 text-sm ${
              aba === nome ? 'font-bold underline' : ''
            }`}
          >
            {nome}
          </button>
        ))}
      </nav>
    </div>
  );
}