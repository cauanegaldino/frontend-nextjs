import InfoBubble from "./InfoBubble"

export default function Info()
{
    return(
        <div className="flex flex-col w-full h-[50%] bg-amber-950">
            <div className="flex flex-row w-full h-[45%] bg-amber-200 items-center gap-x-3 px-4">
                <InfoBubble></InfoBubble>
                <InfoBubble></InfoBubble>
                <InfoBubble></InfoBubble>
            </div>
        </div>
    )
}