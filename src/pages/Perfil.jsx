import { useState } from "react";

export default function Perfil() {
  const [nome, setNome] = useState("Wesley Adriano Silva Sena");
  const [pesoAtual, setPesoAtual] = useState("82");
  const [pesoMeta, setPesoMeta] = useState("75");

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Meu Perfil</h2>
      <div>
        <label className="block">Nome:</label>
        <input
          className="border p-2 w-full rounded"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Peso atual (kg):</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          value={pesoAtual}
          onChange={(e) => setPesoAtual(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Peso desejado (kg):</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          value={pesoMeta}
          onChange={(e) => setPesoMeta(e.target.value)}
        />
      </div>
    </div>
  );
}