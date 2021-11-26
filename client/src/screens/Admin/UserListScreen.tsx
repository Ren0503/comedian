import React, { useEffect } from 'react';
import { deleteUser, listUsers } from 'actions';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom';
import { AppDispatch } from 'store';
import { ReduxState } from 'types/ReduxState';
import { Loader, Message } from 'components/shared';
import { DeleteIcon, EditIcon } from 'components/icons';

interface UserListScreenProps extends RouteComponentProps { }

const UserListScreen = ({ history }: UserListScreenProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, users, error } = useSelector(
        (state: ReduxState) => state.userList
    );
    const { userInfo } = useSelector((state: ReduxState) => state.userLogin);
    const { success: successDelete } = useSelector(
        (state: ReduxState) => state.userDelete
    );

    useEffect(() => {
        if (userInfo && userInfo.isAdmin)
            dispatch(listUsers());
        else history.push('/login');
    }, [dispatch, history, userInfo, successDelete]);

    const deleteHandler = (userId: string) => {
        if (window.confirm('Are you sure')) dispatch(deleteUser(userId));
    };

    const usersListDisplay = () => {
        if (loading) return <Loader />;
        else if (error) return <Message variant='red'>{error}</Message>;
        else
            return (
                <div className="container">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                    Avatar
                                </th>
                                <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <img src={user.avatar} alt="Avatar" width="40" />
                                    </td>
                                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                        {user.name}
                                    </td>
                                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                        {user.email}
                                    </td>
                                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                        {user.isAdmin ? <p>Admin</p> : <p>User</p>}
                                    </td>
                                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                        <Link to={`/admin/user/${user._id}/edit`}>
                                            <EditIcon />
                                        </Link>
                                    </td>
                                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => deleteHandler(user._id)}>
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
    }

    return (
        <>
            <h1>Users</h1>
            {usersListDisplay()}
        </>
    );
};

export default UserListScreen;
