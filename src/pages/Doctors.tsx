import React from 'react';
import { Award, GraduationCap, Users, Clock } from 'lucide-react';

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Hamid Filousse',
      specialty: 'Implantologie & Esthétique',
      description: 'Spécialiste en implants et traitements esthétiques avec plus de 15 ans d\'expérience.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
      qualifications: ['Doctorat en Chirurgie Dentaire', 'Spécialisation Implantologie', 'Formation en Esthétique Dentaire'],
      expertise: ['Implants dentaires', 'Couronnes et bridges', 'Facettes dentaires', 'Smile design'],
      experience: '15+ ans'
    },
    {
      name: 'Dr. Ramzi Abdelhakim',
      specialty: 'Orthodontie & Soins Généraux',
      description: 'Expert en alignement dentaire et soins globaux, passionné par les dernières technologies.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      qualifications: ['Doctorat en Chirurgie Dentaire', 'Spécialisation Orthodontie', 'Formation Invisalign'],
      expertise: ['Aligneurs invisibles', 'Orthodontie classique', 'Soins préventifs', 'Détartrage'],
      experience: '12+ ans'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Notre Équipe Médicale
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Des experts passionnés dédiés à votre sourire et votre bien-être
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Doctor Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                      <div className="flex items-center space-x-2 text-slate-800">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">{doctor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                      {doctor.name}
                    </h2>
                    <p className="text-2xl text-blue-600 font-semibold mb-6">
                      {doctor.specialty}
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {doctor.description}
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <span>Qualifications</span>
                    </h3>
                    <ul className="space-y-2">
                      {doctor.qualifications.map((qual, qualIndex) => (
                        <li key={qualIndex} className="text-slate-700 flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                      <Award className="w-6 h-6 text-yellow-600" />
                      <span>Domaines d'expertise</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {doctor.expertise.map((expert, expertIndex) => (
                        <div key={expertIndex} className="bg-white/70 px-4 py-2 rounded-lg text-slate-700 text-center font-medium hover:bg-white/90 transition-colors duration-200">
                          {expert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="tel:+212524890021"
                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                  >
                    Prendre Rendez-vous
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Pourquoi choisir notre équipe ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une approche personnalisée et des soins d'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Écoute personnalisée</h3>
              <p className="text-slate-600 leading-relaxed">
                Chaque patient bénéficie d'une attention particulière et de conseils adaptés à ses besoins spécifiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-slate-900 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Excellence technique</h3>
              <p className="text-slate-600 leading-relaxed">
                Formation continue et maîtrise des dernières technologies pour des résultats optimaux.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Formation continue</h3>
              <p className="text-slate-600 leading-relaxed">
                Participation régulière aux congrès et formations pour rester à la pointe de l'innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;