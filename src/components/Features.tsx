import { Users, Briefcase, Calendar, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Alumni Directory",
      description: "Connect with alumni across different batches and industries"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Job Board",
      description: "Exclusive career opportunities posted by alumni network"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Events",
      description: "Virtual and physical meetups, workshops, and reunions"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Mentorship",
      description: "Get guidance from experienced alumni in your field"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Connected
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features to help you grow your professional network
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}