import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div>
                        <a href="#" className="text-2xl !font-['Pacifico'] text-white mb-4 inline-block">SoftSell</a>
                        <p className="text-gray-400 mb-6">
                            The leading marketplace for buying and selling unused software licenses.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to receive updates and special offers.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full rounded-l border-none bg-white text-gray-800 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r whitespace-nowrap hover:bg-blue-400 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="mt-6">
                            <p className="text-gray-400 text-sm mb-2">Secure Payments</p>
                            <div className="flex space-x-3 text-gray-300">
                                <i className="fa-brands fa-cc-visa"></i>
                                <i className="fa-brands fa-cc-mastercard"></i>
                                <i className="fa-brands fa-cc-paypal"></i>
                                <i className="fa-brands fa-apple-pay"></i>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2025 SoftSell. All rights reserved.</p>
                    <p className="text-gray-400 text-sm mt-4 md:mt-0">
                        Made with <i className="fa-solid fa-heart text-red-500"></i> in Lucknow
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
