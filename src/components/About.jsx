import React, { useState } from 'react';

function About() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State to manage form submission status
    const [formStatus, setFormStatus] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the form data to a backend service
        // Example using fetch (replace with your own endpoint):
        fetch('https://your-backend-endpoint.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                setFormStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.error('Error:', error);
                setFormStatus('Failed to send message. Please try again later.');
            });
    };

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

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
                            <div className="mb-4">
                                <label className="block text-navyblue text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-navyblue leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-navyblue text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-navyblue leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-navyblue text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-navyblue leading-tight focus:outline-none focus:shadow-outline"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-navyblue hover:bg-skyblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                            {formStatus && <p className="mt-4 text-skyblue">{formStatus}</p>}
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default About;
