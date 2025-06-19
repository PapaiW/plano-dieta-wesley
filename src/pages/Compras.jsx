const alimentos = [
  "Ovos",
  "Aveia",
  "Banana",
  "Pão integral",
  "Iogurte",
  "Frango",
  "Legumes",
  "Macarrão integral",
  "Tapioca",
  "Maçã",
  "Batata doce",
  "Arroz integral",
  "Feijão",
  "Mamão",
  "Abobrinha",
  "Cenoura",
  "Lentilha",
  "Quinoa",
  "Grão-de-bico",
  "Uvas passas",
  "Pasta de amendoim"
];

export default function Compras() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Lista de Compras Semanal</h2>
      <ul className="space-y-1">
        {alimentos.map((item, idx) => (
          <li key={idx} className="bg-white dark:bg-gray-800 p-2 rounded shadow">
            🛒 {item}
          </li>
        ))}
      </ul>
    </div>
  );
}