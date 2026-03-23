export default function InfoBubble({text})
{   return(
        <div className="flex w-[40%] h-[70%] bg-green-400 flex-col rounded-3xl items-center p-1.5">
            <p className="text-center bold wrap-break-word text-[clamp(0.2vw,1.5vw,2vw)]">
                {text}
            </p>
        </div>
    )
}