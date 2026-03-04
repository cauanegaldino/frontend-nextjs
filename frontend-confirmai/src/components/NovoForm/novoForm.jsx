import { useState } from "react"
import Input from "../input"
import Button from "../button"
import CampoPreview from "./campoPreview"
import AddCampoButton from "./addCampoButton"


function NovoForm() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [campos, setCampos] = useState([])
  const [limite, setLimite] = useState(0)
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")

  function adicionarCampo() {
    setCampos([
      ...campos,
      {
        id: Date.now(),
        label: "",
        required: false,
        type: "text",
      },
    ])
  }

  function removerCampo(id) {
    setCampos(prev => prev.filter(campo => campo.id !== id))
  }

  function atualizarCampo(id, key, value) {
    setCampos(
      campos.map((campo) =>
        campo.id === id ? { ...campo, [key]: value } : campo
      )
    )
  }

  function salvarForm() {
    const formulario = {
      titulo,
      descricao,
      campos,
    }

    console.log("FORMULÁRIO CRIADO:", formulario)
  }

  return (
    <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-xl flex flex-col gap-6">
      <h2 className="text-xl font-bold">Criar novo formulário</h2>

      <Input
        label="Título do formulário"
        placeholder="Ex: Processo Seletivo 2026"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <Input
        label="Descrição"
        placeholder="Descreva o objetivo do formulário"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <div className="flex flex-col gap-3">
        <span className="font-semibold">Campos do formulário</span>

        {campos.map((campo) => (
          <CampoPreview
            key={campo.id}
            campo={campo}
            onChange={atualizarCampo}
            onRemove={removerCampo}
          />
        ))}

        <AddCampoButton onClick={adicionarCampo} />
      </div>

      <Button onClick={salvarForm}>
        Salvar e gerar link
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div>
        <label className="font-semibold text-red-600 mb-2 block">
        Limite de Inscrições
        </label>
        <input
        type="number"
        value={limite}
        onChange={(e) => setLimite(e.target.value)}
        className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none"
        />
        </div>

        <div>
        <label className="font-semibold text-red-600 mb-2 block">
        Data de início
        </label>
        <input
        type="date"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
        className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none"
        />
        </div>

        <div>
        <label className="font-semibold text-red-600 mb-2 block">
        Data de encerramento
        </label>
        <input
        type="date"
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
        className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none"
        />
        </div>
    </div>
    </div>
    
  )
}

export default NovoForm
