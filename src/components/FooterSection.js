import React, { useState } from 'react';

const FooterSection = ({ title, items }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

    return (
        <div>
            <h3 className="font-bold">{title}</h3>
            {title === 'Languages' ? (
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="mt-2 p-2 bg-gray-800 text-white rounded"
                >
                    {items.map((language, index) => (
                        <option key={index} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            ) : (
                <ul className="mt-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-gray-400">{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FooterSection;
