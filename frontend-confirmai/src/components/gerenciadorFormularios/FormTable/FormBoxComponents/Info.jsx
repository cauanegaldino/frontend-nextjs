import InfoBubble from "./InfoBubble"

export default function Info()
{
    return(
        <div className="flex flex-col w-full h-[30%] bg-amber-200">
            <div className="flex flex-row w-full h-[30%] items-center gap-x-3 px-4 bg-amber-300">
                <h1 className="w-[40%] h-[70%] text-center justify-center text-[clamp(0.1vw,1.4vw,2vw)]">Inscrições</h1>
                <h1 className="w-[40%] h-[70%] text-center justify-center text-[clamp(0.1vw,1.4vw,2vw)]">Coversão</h1>
                <h1 className="w-[40%] h-[70%] text-center justify-center text-[clamp(0.1vw,1.4vw,2vw)]">Visualizações</h1>
            </div>
            <div className="flex flex-row w-full h-[70%] items-center gap-x-3 px-4">
                <InfoBubble></InfoBubble>
                <InfoBubble></InfoBubble>
                <InfoBubble></InfoBubble>
            </div>
        </div>
    )
}