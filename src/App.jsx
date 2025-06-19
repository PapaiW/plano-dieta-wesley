import { useState } from "react";

const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const refeicoes = ["Café da Manhã", "Lanche da Manhã", "Almoço", "Lanche da Tarde", "Jantar"];

const plano = {
  "Segunda": [
    "2 ovos mexidos + aveia (40g) com banana",
    "Pão integral (2 fatias) + ovo cozido + banana",
    "Arroz integral (150g), feijão (100g), frango grelhado (120g), legumes (100g)",
    "Iogurte (170g) + aveia (20g) + banana",
    "Macarrão integral (150g), frango desfiado, legumes"
  ],
  "Terça": [
    "Panqueca de aveia e ovo + mamão (100g)",
    "Iogurte (170g) + aveia (20g)",
    "Macarrão integral (150g), frango desfiado, abobrinha",
    "Maçã + pasta de amendoim (10g)",
    "Ovos mexidos (2 un), arroz integral, brócolis"
  ],
  "Quarta": [
    "2 ovos cozidos + pão integral (2 fatias) + maçã",
    "Tapioca (40g) + frango desfiado",
    "Batata cozida (150g), ovo cozido (2 un), couve refogada",
    "Ovo cozido + pão integral (1 fatia)",
    "Batata doce (150g), frango, salada"
  ],
  "Quinta": [
    "Omelete com legumes + banana",
    "Pão integral + requeijão light + maçã",
    "Arroz integral, lentilha, peito de frango, cenoura cozida",
    "Iogurte com mamão + granola caseira",
    "Macarrão integral, ovo cozido, abobrinha grelhada"
  ],
  "Sexta": [
    "Tapioca (60g) com ovo mexido + mamão",
    "1 iogurte + uva passa + castanhas (10g)",
    "Quinoa (100g), frango grelhado, mix de legumes",
    "Tapioca recheada com ovo mexido",
    "Arroz integral, feijão, omelete"
  ],
  "Sábado": [
    "Mingau de aveia (40g) com leite e banana",
    "Ovo cozido + fruta da estação",
    "Arroz integral, grão-de-bico, frango, abobrinha refogada",
    "Banana amassada com aveia e canela",
    "Panqueca de aveia com recheio de frango"
  ],
  "Domingo": [
    "2 ovos cozidos + aveia (30g) + mamão",
    "Banana + aveia + pasta de amendoim (10g)",
    "Feijão, arroz, ovo mexido, salada crua",
    "Iogurte + uva passa + amendoim",
    "Arroz integral, ovo cozido, vagem"
  ]
};

export default function App() {
  const [realizado, setRealizado] = useState({});

  const toggleCheck = (dia, idx) => {
    const key = `${dia}-${idx}`;
    setRealizado((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Plano Alimentar – Wesley Adriano Silva Sena</h1>
      {dias.map((dia) => (
        <div key={dia} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{dia}</h2>
          <div className="space-y-2">
            {refeicoes.map((ref, idx) => (
              <div
                key={`${dia}-${idx}`}
                className="flex items-center bg-white dark:bg-gray-800 p-3 rounded shadow"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={!!realizado[`${dia}-${idx}`]}
                  onChange={() => toggleCheck(dia, idx)}
                />
                <span>
                  <strong>{ref}:</strong> {plano[dia]?.[idx] || "(em breve)"}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}