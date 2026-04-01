import {MenuButton} from "../gerenciadorFormularios/UpperComponents/managerButtons"

export default function Cabecalho()
{
    return(
        <div className="w-full h-[10%] flex flex-row justify-between items-center gap-x-4">
            <h2 className="text-white text-[clamp(1rem,4cqw,3rem)]  font-bold h-full flex items-center ml-6 ">Gerenciador de Formularios</h2>

            <div className="flex flex-col w-[30%] gap-4 my-2 mr-4 items-end justify-center">
                <MenuButton label="Novo Formulário"/>
                <MenuButton label="Cancelar"/>
            </div>
        </div>
    )
}