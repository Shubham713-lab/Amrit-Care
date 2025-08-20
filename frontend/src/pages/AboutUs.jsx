import React from 'react';
import { Heart, Shield, Lightbulb, Users } from 'lucide-react';

// Team Member Card Component
const TeamMember = ({ name, role, imageUrl }) => (
  <div className="text-center">
    <img
      src={imageUrl}
      alt={`Portrait of ${name}`}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
      // Fallback placeholder image
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/128x128/f97316/ffffff?text=AC'; }}
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </div>
);

// Value Proposition Card Component
const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Amrit Care</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Your health is our priority. Discover our mission to provide accessible, reliable, and compassionate healthcare services to our community.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
              alt="Healthcare professionals collaborating"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To revolutionize healthcare access in Rajkot and beyond by delivering authentic medicines and healthcare products to every doorstep. We are committed to ensuring affordability, availability, and accessibility for all.
            </p>
            <p className="text-gray-600">
              We strive to be more than just a pharmacy; we aim to be a trusted health partner for you and your family, providing expert advice and unwavering support.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Heart size={28} />}
              title="Compassion"
              description="We approach every customer with empathy and understanding."
            />
            <ValueCard 
              icon={<Shield size={28} />}
              title="Integrity"
              description="We guarantee 100% authentic products and transparent pricing."
            />
            <ValueCard 
              icon={<Lightbulb size={28} />}
              title="Innovation"
              description="We leverage technology to make healthcare simpler and more accessible."
            />
             <ValueCard 
              icon={<Users size={28} />}
              title="Community"
              description="We are dedicated to the health and well-being of our local community."
            />
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TeamMember 
            name="Tushar Singh" 
            role="" 
            imageUrl="https://placehold.co/128x128/e2e8f0/4a5568?text=TS" 
          />
          <TeamMember 
            name="" 
            role="" 
            imageUrl="https://placehold.co/128x128/e2e8f0/4a5568?text=SC" 
          />
          <TeamMember 
            name="" 
            role="" 
            imageUrl="https://placehold.co/128x128/e2e8f0/4a5568?text=SK" 
          />
          <TeamMember 
            name="" 
            role="" 
            imageUrl="https://placehold.co/128x128/e2e8f0/4a5568?text=AK" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
