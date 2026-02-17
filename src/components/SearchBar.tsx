interface SearchBarProps{
    value: string;
    onChange: (value: string) => void;
};


const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div>
            <input id="p" type="text" value={value} className=" w-full bg-transparent rounded-4 border p-0.5 border-gray-300 placeholder:text-gray-400 focus:outline-none rounded-md" placeholder="Search by name, location" onChange={(e) => onChange(e.target.value)}></input>
        </div>
    )

}

export default SearchBar;