function About() {
    return(
        <>
             <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Summary */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-gray-700">
                    My name is Md Abdul Kyum. I am passionate about web development and enjoy creating interactive and user-friendly experiences. With a background in [mention any relevant experience or education], I am skilled in [mention relevant skills like HTML, CSS, JavaScript, React, etc.]. I am dedicated to continuous learning and exploring new technologies to enhance my development skills. Outside of coding, I enjoy [mention hobbies or interests]. Connect with me to discuss web projects, tech trends, or anything web-related!
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Skills</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <li className="bg-white shadow-md rounded-lg p-4">HTML5</li>
                        <li className="bg-white shadow-md rounded-lg p-4">CSS3</li>
                        <li className="bg-white shadow-md rounded-lg p-4">JavaScript</li>
                        <li className="bg-white shadow-md rounded-lg p-4">React</li>
                        <li className="bg-white shadow-md rounded-lg p-4">Tailwind CSS</li>
                        <li className="bg-white shadow-md rounded-lg p-4">Git</li>
                    </ul>
                </section>

                {/* Contact Information */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        You can reach out to me via email or connect with me on social media.
                    </p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="mailto:kyummdabdul@gmail.com" className="text-blue-500 hover:text-blue-700">
                                Email
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/your-profile" className="text-blue-500 hover:text-blue-700">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/your-twitter" className="text-blue-500 hover:text-blue-700">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        </>

    );
  }
  
  export default About;
  