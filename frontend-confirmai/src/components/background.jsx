import fundo from "../../public/assets/fundo.png"

function Background({children}){
    return(
        <div className="min-h-screen relative overflow-hidden bg-linear-to-t from-[#980C0C] to-[#F00000]">
            <img src={fundo} 
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default Background;