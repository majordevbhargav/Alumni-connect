import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover mix-blend-overlay"
          alt="University campus"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connect with Your Alumni Network
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Build meaningful connections, advance your career, and stay connected with your alma mater
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Join Network
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}