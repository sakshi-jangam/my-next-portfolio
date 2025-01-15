import Navbar from "../Navbar"; // Adjust the path to your Navbar component

export default function ContactPage() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300"
      >
        <div className="text-center p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Feel free to get in touch with me for collaboration, projects, or
            just a chat. I’m always open to discussing new ideas and
            opportunities!
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-3 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-3 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 p-3 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
