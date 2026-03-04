function DashboardCards({ stats }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-10">
      <Card value={stats.formulariosAtivos} label="Formulários Ativos" />
      <Card value={stats.inscricoesRecebidas} label="Inscrições Recebidas" />
      <Card value={stats.processosAndamento} label="Processos em Andamento" />
    </div>
  )
}

function Card({ value, label }) {
  return (
    <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-md w-52">
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-gray-700">{label}</p>
    </div>
  )
}

export default DashboardCards