import React from 'react';
import FooterSection from './FooterSection';
import footerData from './footerData';
import Logo from '../../src/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {footerData.map((section, index) => (
                    <FooterSection key={index} title={section.title} items={section.items} />
                ))}
            </div>
            <div className="flex flex-col mt-8 sm:flex-row sm:gap-8 justify-between mx-auto max-w-6xl">
                <div className="flex items-center sm:mr-8 gap-4">
                    <img src={Logo} alt="Harryphoto logo" width={50} />
                    <p className="text-xl font-semibold">Harryphoto</p>
                </div>
                <p className="text-gray-400 mt-4 sm:max-w-lg lg:mr-14">
                    Sign up for a free account today and start exploring our Image Content Library. Whether you're working on a professional project, sprucing up your personal blog, or simply seeking visual inspiration, we've got you covered.
                </p>
            </div>
            <p className="text-gray-500 mt-6 text-center">Copyright © {currentYear} Harry Photo, All rights reserved.</p>
        </footer>
    );
};

export default Footer;
