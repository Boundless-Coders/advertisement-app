'use client'

import { motion } from 'framer-motion'
import { Megaphone, Users, Zap } from 'lucide-react'
import RootLayout from "../layouts/RootLayout"

const TeamMember = ({ name, position, imageUrl }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
  >  
    <div className="w-32 h-32 rounded-full mb-4 border-4 border-blue-800 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover object-center"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-purple-600 font-medium">{position}</p>
    <div className="mt-4 flex space-x-2">
      <a href="#" className="text-blue-500 hover:text-blue-700">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>
      <a href="#" className="text-blue-700 hover:text-blue-900">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-700">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </motion.div>
)

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500"
  >
    <div className="flex items-center mb-4">
      <Icon className="text-purple-500 mr-2" size={24} />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const About = () => {
  const teamMembers = [
    {
      name: "Frank Koomson",
      position: "CEO / Lead Developer",
      imageUrl: "/placeholder.svg?height=128&width=128"
    },
    {
      name: "Mary-Magdalene",
      position: "Head of Marketing",
      imageUrl: "/placeholder.svg?height=128&width=128"
    },
    {
      name: "Believe Kwamitse",
      position: "UX/UI Designer",
      imageUrl: "/placeholder.svg?height=128&width=128"
    },
    {
      name: "Roberta Ayettey",
      position: "Customer Success Manager",
      imageUrl: "/placeholder.svg?height=128&width=128"
    },
    {
      name: "Daniel Essel",
      position: "Business Development Manager",
      imageUrl: "/placeholder.svg?height=128&width=128"
    },
  ]

  const features = [
    {
      title: "Targeted Advertising",
      description: "Reach your ideal audience with precision targeting and advanced analytics.",
      icon: Megaphone
    },
    {
      title: "User-Friendly Interface",
      description: "Create and manage your ad campaigns with our intuitive, easy-to-use platform.",
      icon: Users
    },
    {
      title: "Real-time Performance Tracking",
      description: "Monitor your ad performance in real-time and optimize for better results.",
      icon: Zap
    }
  ]

  return (
    <RootLayout>
      <div className="min-h-screen ">
        <div className="mx-auto pt-32   px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-5xl ml-28 font-bold mb-8 text-[#13363A] "
          >
            About ClassyAd
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-purple-300 shadow-xl rounded-lg p-8 mb-16 mx-24"
          >
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              ClassyAd is dedicated to revolutionizing the way businesses advertise online. We provide cutting-edge solutions to help you reach your target audience effectively and efficiently.
            </p>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              Founded in 2024, our mission is to empower businesses of all sizes with the tools they need to create impactful advertising campaigns. We believe that great advertising is the key to business growth and success in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16 bg-purple-300 rounded-lg mx-24 shadow-xl"
          >
            <h2 className="text-4xl font-semibold text-purple-700 mb-8 text-center pt-8">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 pb-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className='bg-purple-300 rounded-lg shadow-xl mx-24'
          >
            <h2 className="text-4xl font-semibold text-purple-900 mb-8 text-center pt-8">Our Team</h2>
            <p className="text-lg mb-8 text-center text-gray-700 max-w-3xl mx-auto">
              ClassyAd is powered by a passionate team of marketing experts, software engineers, and creative minds. We're committed to continually improving our platform to meet the evolving needs of businesses in the digital advertising landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 pb-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </RootLayout>
  )
}

export default About;