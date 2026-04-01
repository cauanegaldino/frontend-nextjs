export default function InfoBubble({text})
{   return(
        <div className="flex w-[40%] h-[70%] bg-amber-100 flex-col rounded-3xl justify-center p-1.5">
            <p className="text-center bold break-word text-[clamp(0.1vw,1.4vw,2vw)]">
                {text}
            </p>
        </div>
    )
}