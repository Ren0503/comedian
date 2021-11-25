import React from 'react';

interface PaginateProps {
    pages: number;
    page: number;
    isAdmin?: boolean;
    keyword?: string;
}

const Paginate = ({
    page,
    pages,
    isAdmin = false,
    keyword = ''
}: PaginateProps) => {
    return (
        <>
            {pages > 1 && (
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                        {[...Array(pages).keys()].map((x) => (
                            <li>
                                <a
                                    href={
                                        !isAdmin
                                            ? keyword
                                                ? `/search/${keyword}/page/${x + 1}`
                                                : `/page/${x + 1}`
                                            : `/admin/productlist/${x + 1}`
                                    }
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3"
                                >
                                    {x + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Paginate;
