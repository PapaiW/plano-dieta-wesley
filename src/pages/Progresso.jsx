import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Progresso() {
  const [pesos, setPesos] = useState([]);
  const [novoPeso, setNovoPeso] = useState("");

  const adicionarPeso = () => {
    if (novoPeso) {
      setPesos([...pesos, {
        valor: parseFloat(novoPeso),
        data: new Date().toLocaleDateString()
      }]);
      setNovoPeso("");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="number"
          value={novoPeso}
          onChange={(e) => setNovoPeso(e.target.value)}
          placeholder="Digite seu peso"
          className="border p-2 mr-2 rounded"
        />
        <button onClick={adicionarPeso} className="bg-blue-600 text-white px-3 py-1 rounded">
          Registrar
        </button>
      </div>

      {pesos.length > 1 && (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={pesos}>
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valor" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      )}

      <div className="mt-4">
        <h2 className="font-bold mb-2">Histórico:</h2>
        <ul>
          {pesos.map((item, idx) => (
            <li key={idx}>
              {item.data}: <strong>{item.valor} kg</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}