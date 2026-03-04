"use client";

import { useEffect, useState } from "react"
import Background from "@/components/background"
import DashboardCards from "@/components/NovoForm/dashboardCards"
import NovoForm from "@/components/NovoForm/novoForm"



export default function PainelNovoForm() {
  const [stats, setStats] = useState({
    formulariosAtivos: 0,
    inscricoesRecebidas: 0,
    processosAndamento: 0,
  })

  useEffect(() => {
    setStats({
      formulariosAtivos: 10,
      inscricoesRecebidas: 8,
      processosAndamento: 75,
    })
  }, [])

  return (
    <Background>
        <h1 className="text-white text-3xl font-bold text-center ">
        Painel de Gerenciamento de Formulários
      </h1>
      <DashboardCards stats={stats} />
      <div className="min-h-screen flex justify-center items-center px-4">
        <NovoForm />
      </div>
    </Background>
  )
}

