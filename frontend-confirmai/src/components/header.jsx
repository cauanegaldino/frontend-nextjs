
//Importando fontes do Google
import { Jaro } from "next/font/google";

const jaro = Jaro({ subsets: ["latin"] });

export default function Header({subtitle}){
    return(
        <div className="flex flex-col items-center">
            <img 
                src="/assets/ts.png" 
                alt="Logo TypeScript"
                className="w-30 pt-2"
            />
            <h1 className= {`${jaro.className} text-white text-2xl`}>
                TECNOSYSTEM
            </h1>
            
            {subtitle && (
                <h2 className="text-white">
                    {subtitle}
                </h2>
            )
            }
        </div>
        
    )
}

