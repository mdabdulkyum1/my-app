import React, { useState } from 'react';
import ContactForm from './ContactForm';


function About() {
   

    return (
        <>
            <div className="bg-lightgray min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Profile Summary */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-navyblue mb-4">About Me</h2>
                        <p className="text-lg text-navyblue">
                            My name is Md Abdul Kyum. I am passionate about web development and enjoy creating interactive and user-friendly experiences. With a background in [mention any relevant experience or education], I am skilled in [mention relevant skills like HTML, CSS, JavaScript, React, etc.]. I am dedicated to continuous learning and exploring new technologies to enhance my development skills. Outside of coding, I enjoy [mention hobbies or interests]. Connect with me to discuss web projects, tech trends, or anything web-related!
                        </p>
                    </section>

                    {/* Skills Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-navyblue mb-4">Skills</h2>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <li className="bg-white shadow-md rounded-lg p-4 text-navyblue">HTML5</li>
                            <li className="bg-white shadow-md rounded-lg p-4 text-navyblue">CSS3</li>
                            <li className="bg-white shadow-md rounded-lg p-4 text-navyblue">JavaScript</li>
                            <li className="bg-white shadow-md rounded-lg p-4 text-navyblue">React</li>
                            <li className="bg-white shadow-md rounded-lg p-4 text-navyblue">Tailwind CSS</li>
                            <li className="bg-white shadow-md rounded-lg p-4 text-navyblue">Git</li>
                        </ul>
                    </section>

                    {/* Contact Information and Form */}
                    <section>
                        <h2 className="text-3xl font-bold text-navyblue mb-4">Contact Me</h2>
                        <p className="text-lg text-navyblue mb-4">
                            You can reach out to me via email or connect with me on social media.
                        </p>
                        <ul className="flex space-x-4 mb-8">
                            <li>
                                <a href="mailto:kyummdabdul@gmail.com" className="text-skyblue hover:text-goldenyellow">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/your-profile" className="text-skyblue hover:text-goldenyellow">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/your-twitter" className="text-skyblue hover:text-goldenyellow">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <ContactForm/>
        </>
    );
}

export default About;
