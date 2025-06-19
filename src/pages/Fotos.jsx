import { useState } from "react";

export default function Fotos() {
  const [fotos, setFotos] = useState([]);

  const handleUpload = (e) => {
    const arquivos = Array.from(e.target.files);
    const urls = arquivos.map((file) => ({
      url: URL.createObjectURL(file),
      data: new Date().toLocaleDateString()
    }));
    setFotos((prev) => [...prev, ...urls]);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="mb-4"
      />
      <div className="grid grid-cols-2 gap-2">
        {fotos.map((foto, idx) => (
          <div key={idx} className="text-center">
            <img src={foto.url} alt={"Progresso"} className="w-full h-40 object-cover rounded" />
            <p className="text-sm mt-1">{foto.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}