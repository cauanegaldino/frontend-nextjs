function AddCampoButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="self-start text-sm font-semibold text-red-600 hover:underline"
    >
      + Adicionar novo campo
    </button>
  )
}

export default AddCampoButton