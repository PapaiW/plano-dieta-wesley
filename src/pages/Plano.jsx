import { useState } from "react";

const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const refeicoes = ["Café da Manhã", "Lanche da Manhã", "Almoço", "Lanche da Tarde", "Jantar"];

const plano = {
  "Segunda": [
    "Ovos mexidos + aveia com banana",
    "Pão integral com ovo + fruta",
    "Arroz integral, feijão, frango e legumes",
    "Iogurte com aveia e banana",
    "Macarrão integral com frango e legumes"
  ],
  "Terça": [
    "Panqueca de aveia e ovo + mamão",
    "Iogurte + aveia",
    "Macarrão integral com frango e abobrinha",
    "Maçã + pasta de amendoim",
    "Ovos mexidos com arroz integral"
  ],
  "Quarta": [
    "Ovos cozidos + pão integral + maçã",
    "Tapioca com frango",
    "Batata, ovo cozido, couve",
    "Ovo + pão integral",
    "Batata doce, frango, salada"
  ],
  "Quinta": [
    "Omelete com legumes + banana",
    "Pão integral + requeijão + maçã",
    "Arroz, lentilha, frango, cenoura",
    "Iogurte com mamão + granola",
    "Macarrão integral + ovo + abobrinha"
  ],
  "Sexta": [
    "Tapioca com ovo + mamão",
    "Iogurte + uvas passas + castanhas",
    "Quinoa, frango, legumes",
    "Tapioca com ovo",
    "Arroz, feijão e omelete"
  ],
  "Sábado": [
    "Mingau de aveia com banana",
    "Ovo cozido + fruta da estação",
    "Arroz, grão-de-bico, frango e abobrinha",
    "Banana com aveia e canela",
    "Panqueca de aveia com frango"
  ],
  "Domingo": [
    "Ovos + aveia + mamão",
    "Banana + aveia + pasta de amendoim",
    "Feijão, arroz, ovo mexido, salada",
    "Iogurte + uvas passas + amendoim",
    "Arroz, ovo cozido, vagem"
  ]
};

export default function Plano() {
  const [diaAtual, setDiaAtual] = useState("Segunda");
  const [status, setStatus] = useState({});

  const toggleCheck = (index) => {
    const key = `${diaAtual}-${index}`;
    setStatus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const progresso = Math.round(
    (refeicoes.filter((_, i) => status[`${diaAtual}-${i}`]).length / refeicoes.length) * 100
  );

  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {dias.map((dia) => (
          <button
            key={dia}
            onClick={() => setDiaAtual(dia)}
            className={`px-3 py-1 rounded ${
              diaAtual === dia
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {dia}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <div className="h-4 w-full bg-gray-300 rounded">
          <div
            className="h-4 bg-green-500 rounded"
            style={{ width: progresso + "%" }}
          ></div>
        </div>
        <p className="text-sm mt-1 text-center">{progresso}% do dia concluído</p>
      </div>

      <ul className="space-y-2">
        {refeicoes.map((ref, idx) => (
          <li
            key={idx}
            className="flex items-center bg-white dark:bg-gray-800 p-3 rounded shadow"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={!!status[`${diaAtual}-${idx}`]}
              onChange={() => toggleCheck(idx)}
            />
            <span>
              <strong>{ref}:</strong> {plano[diaAtual][idx]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}