import { Jaro } from "next/font/google";
import { FilterButton } from "@/components/gerenciadorFormularios/UpperComponents/managerButtons"
const jaro = Jaro({ subsets: ["latin"] });


export default function Input()
{
    return(
        <div className=" relative w-full h-24 flex items-center mt-10">
            <div className="flex flex-row gap-2  w-[85%] h-8 rounded-3xl ml-6 bg-amber-50">
                <input 
                type="text" 
                placeholder="Buscar Formulário" 
                className={`w-[65%] h-8 rounded-3xl  pl-4 bg-amber-50 focus:outline-none ${jaro.className}`}
               />
               <div className="flex flex-row w-[35%] justify-end">
                    <FilterButton label="Todos os Status" />
                    <FilterButton label="As datas"/>
               </div>
            </div>
            
        </div>
    );
}

/*

<div className="bg-amber-50 rounded-3xl relative w-[80%] h-15 overflow-hidden ml-7 flex items-center">
            <input
                type="text"
                placeholder="Buscar Formulários"
                className={`w-[80%] h-full rounded-l-xl rounded-r-none bg-amber-50 px-4 py-2 ${jaro.className} text-2xl focus:outline-none focus:ring-0`}
            />
            <div className="flex-1 h-full flex flex-row justify-end items-center gap-4 pr-2">
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div> {/* ocupa o espaço restante 
            
        </div>


        <input 
                type="text" 
                placeholder="Buscar Formulário" 
                className={`w-[80%] h-8 rounded-3xl ml-6 pl-4 bg-amber-50 focus:outline-none ${jaro.className}`}
            />

*/