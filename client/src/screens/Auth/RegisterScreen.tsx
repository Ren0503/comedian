import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { register } from 'actions';
import { AppDispatch } from 'store';
import { ReduxState } from 'types/ReduxState';
import { Message, Loader } from 'components/shared';

interface RegisterScreenProps extends RouteComponentProps { }

const RegisterScreen = ({ location: { search }, history }: RegisterScreenProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>();
    const redirect = search ? search.split('=')[1] : '/';

    const dispatch = useDispatch<AppDispatch>();
    const { userInfo, loading, error } = useSelector(
        (state: ReduxState) => state.userRegister
    );

    useEffect(() => {
        if (userInfo) history.push(redirect);
    }, [history, redirect, userInfo]);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) setMessage('Password do not match');
        else dispatch(register(name, email, password));
    };

    return (
        <div className="h-screen w-full banner">
            <div className="flex flex-col justify-center items-center h-screen">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Have an Accounts?{' '}
                        <Link
                            to={redirect ? `/login?redirect=${redirect}` : '/login'}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Login
                        </Link>
                    </p>
                    {error && <Message variant='danger'>{error}</Message>}
                    {message && <Message variant='danger'>{message}</Message>}
                    {loading && <Loader />}
                </div>
                <form className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg" onSubmit={submitHandler}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="flex flex-col space-y-6">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirm-password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="py-3">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default RegisterScreen;
