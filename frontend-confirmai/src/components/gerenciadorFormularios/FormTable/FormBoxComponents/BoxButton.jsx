export default function BoxButton( {text} )
{
    return(
        <button className="h-[40%] w-[40%] bg-green-300 rounded-4xl text-[clamp(0.1vw,1.6vw,2vw)] text-center bold">
            {text}
        </button>
    )
}