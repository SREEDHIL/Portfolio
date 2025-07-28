import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-6 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <p className="text-gray-400 flex items-center justify-center text-sm sm:text-base">
                        Made with <Heart size={14} className="text-red-500 mx-2 sm:w-4 sm:h-4" /> by Sreedhil Pavishanker B
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-2">
                        © {currentYear} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
