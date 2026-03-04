function Input({label, type="text", placeholder, value, onChange}){
    return(
        <div>
            <label className="block font-semibold mb-2">{label}</label>
                <input 
                type={type}
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
                className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none" 
                />
            
        </div>
    )
}

export default Input;