import React from 'react';
import { Pagination } from 'antd';
import { useHistory } from 'react-router-dom';

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
                <Pagination 
                    defaultCurrent={page} 
                    total={pages} 
                />
            )}
        </>
    );
};

export default Paginate;
