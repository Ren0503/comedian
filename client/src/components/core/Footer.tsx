import React from 'react';
import logo from 'assets/logo.png';

const Footer = () => {
    const FooterLinks = [
        { id: 1, text: 'About Online Movie' },
        { id: 2, text: 'Sign up to watch' },
        { id: 3, text: 'Get Help' },
        { id: 4, text: 'Ask any question' },
        { id: 5, text: 'Watch Now' },
        { id: 6, text: 'Contact' },
        { id: 7, text: 'Facebook' },
        { id: 8, text: 'Instagram' },
        { id: 9, text: 'Twitter' },
        { id: 10, text: 'Youtube' },
    ];

    return (
        <footer className="bg-gray-800 px-6 py-12">
            <div className=" max-w-screen-xl mx-auto px-6">
                <div className="flex pb-8">
                    {/* logo  */}
                    <div className="flex flex-grow">
                        <img src={logo} alt="Logo"/>
                    </div>
                    {/* footer links  */}
                    <div className="flex space-x-12">
                        <div className="flex flex-col space-y-2">
                            {FooterLinks.slice(0, 4).map(item => (
                                <span className="text-white poppins" key={item.id}>{item.text}</span>
                            ))}
                        </div>
                        <div className="flex flex-col space-y-2">
                            {FooterLinks.slice(4, 8).map(item => (
                                <span className="text-white poppins" key={item.id}>{item.text}</span>
                            ))}
                        </div>
                        <div className="flex flex-col space-y-2">
                            {FooterLinks.slice(8, 12).map(item => (
                                <span className="text-white poppins" key={item.id}>{item.text}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center pt-8">
                    <div className="flex flex-grow">
                        <span className="poppins text-gray-500">Developed by 💗 Ren0503</span>
                    </div>

                    <div className="flex justify-end items-center space-x-6">
                        <span className="poppins text-white cursor-pointer">Privacy Policy</span>
                        <span className="poppins text-white cursor-pointer">Terms of Use</span>
                        <span className="poppins text-white cursor-pointer">Pricing</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
