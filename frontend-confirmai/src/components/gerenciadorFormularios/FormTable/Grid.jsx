import FormBox from "../FormTable/FormBox"

export default function Grid()
{
    return(
        <div className="grid grid-cols-2 gap-y-20 gap-x-[10%] w-full h-full px-[5%] py-[5%]justify-items-center auto-rows-max">
            <FormBox></FormBox>
            <FormBox></FormBox>
            <FormBox></FormBox>
            <FormBox></FormBox>


        </div>
    )
}