import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      name: 'Implants',
      icon: <Heart className="w-8 h-8" />,
      description: 'Remplacement durable et esthétique',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Blanchiment',
      icon: <Sparkles className="w-8 h-8" />,
      description: 'Un sourire éclatant et lumineux',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'Alignement',
      icon: <Shield className="w-8 h-8" />,
      description: 'Correction invisible et efficace',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Soins Dentaires',
      icon: <Heart className="w-8 h-8" />,
      description: 'Traitements pour dents et gencives',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const doctors = [
    {
      name: 'Dr. Hamid Filousse',
      specialty: 'Implantologie & Esthétique',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Dr. Ramzi Abdelhakim',
      specialty: 'Orthodontie & Soins Généraux',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Samira',
      rating: 5,
      comment: 'Excellent service, très satisfaite de mon traitement !'
    },
    {
      name: 'Youssef',
      rating: 5,
      comment: 'Une équipe très professionnelle et à l\'écoute.'
    },
    {
      name: 'Fatima',
      rating: 5,
      comment: 'Des résultats exceptionnels, je recommande vivement !'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Centre Dentaire 3 Mars
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Un sourire éclatant et une santé dentaire optimale
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
                  Voir Nos Services
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white/50 backdrop-blur-sm">
                  Contactez-nous
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Prenez Rendez-vous</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-blue-100">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span>Consultation gratuite</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-100">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span>Équipe expérimentée</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-100">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span>Matériel de pointe</span>
                    </div>
                  </div>
                  <a 
                    href="tel:+212524890021"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-center px-6 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300"
                  >
                    +212 524 890 021
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Nos Spécialités
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Des traitements de pointe pour tous vos besoins dentaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Nos Docteurs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une équipe d'experts dédiée à votre sourire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Avis de Nos Patients
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ce que disent nos patients de nos services
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-12 shadow-xl border border-slate-100">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-slate-700 font-medium mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                <div className="text-lg font-semibold text-blue-600">
                  {testimonials[currentTestimonial].name}
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;