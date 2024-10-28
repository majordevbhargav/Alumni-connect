export default function AlumniSpotlight() {
  const alumni = [
    {
      name: "Sarah Chen",
      batch: "2018",
      role: "Senior Product Manager at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Rodriguez",
      batch: "2015",
      role: "Founder & CEO of TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Priya Patel",
      batch: "2019",
      role: "AI Research Scientist at DeepMind",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Alumni Spotlight</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
            <div key={index} className="text-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600 mb-1">Class of {person.batch}</p>
              <p className="text-blue-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}