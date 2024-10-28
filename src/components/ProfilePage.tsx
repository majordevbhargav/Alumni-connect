import { useState } from 'react';
import { 
  User, Briefcase, Building2, MapPin, Mail, 
  Phone, Globe, Linkedin, Twitter, Edit2 
} from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    website: "www.johndoe.dev",
    linkedin: "linkedin.com/in/johndoe",
    twitter: "@johndoe",
    bio: "Passionate software engineer with 8+ years of experience in full-stack development. Alumni of Computer Science '15.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "2020 - Present",
        description: "Leading development of cloud-native applications"
      },
      {
        title: "Software Engineer",
        company: "Innovation Labs",
        duration: "2015 - 2020",
        description: "Full-stack development and system architecture"
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Tech University",
        year: "2015"
      },
      {
        degree: "Bachelor of Engineering",
        school: "Engineering College",
        year: "2013"
      }
    ]
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <Edit2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="relative px-6 pb-6">
          <div className="absolute -top-16">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
          <div className="pt-16">
            <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-xl text-gray-600">{profile.title}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Building2 className="h-5 w-5 text-gray-400" />
            <span>{profile.company}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <span>{profile.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <span>{profile.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-gray-400" />
            <span>{profile.website}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="h-5 w-5 text-gray-400" />
            <span>{profile.linkedin}</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-gray-600">{profile.bio}</p>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          {profile.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-600 pl-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-sm text-gray-500">Class of {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}