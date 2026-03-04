import { LuTrash2 } from "react-icons/lu";

function CampoPreview({ campo, onChange, onRemove }) {
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-xl">
      <input
        type="text"
        placeholder="Nome do campo"
        value={campo.label}
        onChange={(e) => onChange(campo.id, "label", e.target.value)}
        className="flex-1 bg-white rounded-lg px-3 py-2 outline-none"
      />

      <select
        value={campo.type}
        onChange={(e) => onChange(campo.id, "type", e.target.value)}
        className="bg-white rounded-lg px-3 py-2"
      >
        <option value="text">Texto</option>
        <option value="email">Email</option>
        <option value="tel">Telefone</option>
      </select>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={campo.required}
          onChange={(e) =>
            onChange(campo.id, "required", e.target.checked)
          }
        />
        Obrigatório
      </label>

      <button
        type="button"
        onClick={() => onRemove(campo.id)}>
        <LuTrash2 size={18}/>
      </button>
    </div>
  )
}

export default CampoPreview
