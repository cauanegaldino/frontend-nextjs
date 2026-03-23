import fundo from "../../public/assets/fundo.png"

export default function Background({children}){
    return(
        <div className="relative min-h-screen bg-linear-to-t from-[#980C0C] to-[#F00000]">
            <img 
                src={fundo} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10 min-h-screen  flex flex-col">
                {children}
            </div>
        </div>
    )
}