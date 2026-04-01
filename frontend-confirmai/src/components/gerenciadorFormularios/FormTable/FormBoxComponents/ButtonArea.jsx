import BoxButton from "./BoxButton"
export default function ButtonArea()
{
    return(
        <div className="h-[25%] w-full flex flex-row justify-center items-center gap-3 ">
            <BoxButton text={"Ver inscrições"}></BoxButton>
            <BoxButton text={"Excluir"}></BoxButton>
        </div>
    )
}