import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchIcon } from 'components/icons';

const SearchBox = () => {
    const [keyword, setKeyword] = useState<string>('');
    const { push } = useHistory();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword.trim()) push(`/search/${keyword}`);
        else push('/');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                <input 
                    type="text"
                    name="search"
                    className="rounded-full px-4 focus:outline-none w-full bg-transparent" 
                    placeholder="Search here ......."
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                />
                <button className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
                    <SearchIcon />
                </button>
            </div>
        </form>
    );
};

export default SearchBox;
