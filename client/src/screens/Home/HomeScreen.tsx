import React from 'react';
import { SearchBox } from 'components/core';

const HomeScreen = () => {
    return (
        <section className="header-banner h-96 w-full bg-yellow-50">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
                    Best movie waiting for your watch
                </h1>

                <SearchBox />
            </div>
        </section>
    );
}

export default HomeScreen;
