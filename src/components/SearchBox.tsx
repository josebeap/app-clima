import { FormEvent, useEffect, useRef, useState } from "react";

export const SearchBox = ({ handleSearch }: {
    handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {

    const [search, setSearch] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement;
        setSearch(value)
    }

    useEffect(() => {
        inputRef.current!.focus();
    }, [])


    return (
        <form
            id="form"
            onSubmit={(e) => {
                handleSearch(e, search);
                setSearch("")
            }}

        >
            <label htmlFor="search"></label>
            <input
                ref={inputRef}
                autoComplete="off"
                id="search"
                name="search"
                type="search"
                className="w-72 h-10 p-3 rounded-full mt-6 mb-5"
                placeholder="Buscar clima de ciudad... 🌃🌇"
                onChange={handleChange}
                value={search}
            />
        </form>
    )
}
