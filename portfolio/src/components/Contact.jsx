import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
                        Get In <span className="text-purple-400">Touch</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Information */}
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Let's Connect</h3>
                                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                                    I'm always interested in new opportunities and collaborations.
                                    Whether you have a project in mind or just want to chat about tech,
                                    don't hesitate to reach out!
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center">
                                    <div className="bg-purple-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                        <Mail size={20} className="text-white sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm sm:text-base">Email</p>
                                        <p className="text-white text-sm sm:text-base">sreedhilpavishanker@gmail.com</p>
                                    </div>
                                </div>

                                {/* <div className="flex items-center">
                                    <div className="bg-purple-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                        <Linkedin size={20} className="text-white sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm sm:text-base">Linkedin</p>
                                        <p className="text-white text-sm sm:text-base">https://www.linkedin.com/in/sreedhil-pavishanker-b-476a72306/</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-purple-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                        <Github size={20} className="text-white sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm sm:text-base">Github</p>
                                        <p className="text-white text-sm sm:text-base">https://github.com/SREEDHIL</p>
                                    </div>
                                </div> */}

                                <div className="flex items-center">
                                    <div className="bg-purple-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                                        <MapPin size={20} className="text-white sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm sm:text-base">Location</p>
                                        <p className="text-white text-sm sm:text-base">KASARAGOD, KERALA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 sm:pt-8">
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Me</h4>
                                <div className="flex space-x-3 sm:space-x-4">
                                    <a href="https://github.com/SREEDHIL" className="bg-gray-700 p-2 sm:p-3 rounded-lg text-white hover:bg-purple-600 transition-colors duration-200">
                                        <Github size={20} className="sm:w-6 sm:h-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sreedhil-pavishanker-b-476a72306/" className="bg-gray-700 p-2 sm:p-3 rounded-lg text-white hover:bg-purple-600 transition-colors duration-200">
                                        <Linkedin size={20} className="sm:w-6 sm:h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 mb-2 text-sm sm:text-base">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-200 text-sm sm:text-base"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-400 mb-2 text-sm sm:text-base">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-200 text-sm sm:text-base"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-400 mb-2 text-sm sm:text-base">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none text-sm sm:text-base"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
                                >
                                    <Send size={16} className="mr-2 sm:w-5 sm:h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
