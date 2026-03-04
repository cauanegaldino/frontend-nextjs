function Button({
    children,
    type = "button",
    onClick,
    className = "",
}) {
    return(
        <button 
            type={type} 
            onClick={onClick}
            className={` w-full md:w-1/2 px-6 py-3 bg-linear-to-t from-[#980C0C] to-[#F00000] rounded-2xl text-white font-semibold ${className} cursor-pointer`}>
            {children}
            </button>  
    )

}
export default Button;