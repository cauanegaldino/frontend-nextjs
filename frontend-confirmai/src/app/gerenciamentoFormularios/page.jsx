import Background from "@/components/background";
import {MenuButton} from "@/components/gerenciadorFormularios/UpperComponents/managerButtons"
import Input from "@/components/gerenciadorFormularios/UpperComponents/input"
import FormBox from "@/components/gerenciadorFormularios/FormTable/FormBox"
export default function Page()
{
    return(
        <Background>
            <div className="ml-8 mt-2 w-full flex flex-row @container items-center "> 
                <div className="w-[50%] self-start mt-2">
                    <h2 className="text-white text-[clamp(1rem,5cqw,3rem)] font-bold text-left w-[89%]">Gerenciamento de Formulários</h2>
                </div>
                <div className="flex flex-col w-[50%] h-full gap-4 mt-4 mb-4 items-end ">
                    <MenuButton>

                    </MenuButton>
                    <MenuButton>
                        
                    </MenuButton>
                </div>
            </div>
            
            <Input />

            <div className="bg-amber-50 w-full flex flex-col ml-8 mr-8">
               
            </div>
          
        </Background>
    )
}