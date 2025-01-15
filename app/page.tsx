import Link from 'next/link';
import Navbar from './Navbar'; // Import Navbar component
import { Button } from "@/components/ui/button"; // Import ShadCN UI Button

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300"
        style={{
          backgroundImage: '/images/profilepic.jpeg', // Correct image path
          backgroundSize: 'cover',  // Cover the entire section
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent repeating the image
        }}
      >
        <div className="text-center p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg max-w-xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Hi, I'm Sakshi Jangam
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            "I'm a passionate web developer and the GDGC (Google Developer Group) Campus Lead at ADCET. With expertise in cloud computing, full-stack development, and AI, I am committed to driving innovation and empowering fellow developers through collaboration and cutting-edge technologies."
          </p>
          <Link href="https://www.linkedin.com/in/sakshi-jangam-31a173244/" passHref>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              LinkedIn
            </Button>
          </Link>

          <Link href="https://github.com/sakshi-jangam" passHref>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              GitHub
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="min-h-screen bg-gray-50 py-12"> */}
      {/*    <div className="text-center p-8 max-w-xl mx-auto"> */}
      {/*      <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2> */}
      {/*      <p className="text-lg text-gray-600"> */}
      {/*        I am a full-stack developer with a passion for building user-friendly web applications. */}
      {/*        With skills in frontend and backend development, I strive to create intuitive and */}
      {/*        high-performance applications that solve real-world problems. */}
      {/*      </p> */}
      {/*    </div> */}
      {/* </section> */}
    </>
  );
}
