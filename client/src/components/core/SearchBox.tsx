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
            <div className="pt-2 relative mx-auto text-gray-600">
                <input 
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
                    type="text"
                    name="search"
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    placeholder="Search"
                />
                
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    <SearchIcon />
                </button>
            </div>
        </form>
    );
};

export default SearchBox;
