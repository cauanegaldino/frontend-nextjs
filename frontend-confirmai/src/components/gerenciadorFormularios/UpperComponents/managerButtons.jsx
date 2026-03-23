export function FilterButton({label})
{
    return(
        <button
          className="w-[45%] h-[90%] bg-amber-50 border my-0.5 mx-0.5 rounded-3xl text-[0.5rem]">
            {label}
          </button>
    )
}

export function MenuButton({ label, type = "button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-amber-50 
        w-30
        rounded-xl 
        flex items-center justify-center 
        px-4 py-2.5 
        font-bold 
        text-xs
        truncate
        ${className}
      `}
    >
      {label}
    </button>
  );
}