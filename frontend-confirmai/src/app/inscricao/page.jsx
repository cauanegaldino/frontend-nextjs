import FormPainel from "../../components/formPainel";
import Background from "../../components/background";
import Header from "../../components/header";


export default function PainelProcesso(){
    return(
        <Background>
            <Header subtitle="Portal de Inscrições"/>
            <h1 className="text-white text-2xl flex flex-col items-center pt-5">Processo Seletivo de Analistas </h1>
            <div className="min-h-screen flex items-center justify-center px-4">
                <FormPainel/>
            </div>
        </Background>
    )
}
