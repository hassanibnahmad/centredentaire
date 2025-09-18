import React from 'react';
import { Heart, Sparkles, Shield, Stethoscope, Star, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      name: 'Implants Dentaires',
      icon: <Heart className="w-8 h-8" />,
      description: 'Solution durable et esthétique pour remplacer une dent manquante.',
      features: ['Implants titane', 'Couronne céramique', 'Résultat naturel', 'Longue durée de vie'],
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Blanchiment',
      icon: <Sparkles className="w-8 h-8" />,
      description: 'Des dents plus blanches et un sourire éclatant.',
      features: ['Technique LED', 'Gel professionnel', 'Résultats immédiats', 'Traitement sécurisé'],
      color: 'from-yellow-400 to-yellow-500',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Alignement',
      icon: <Shield className="w-8 h-8" />,
      description: 'Corrections dentaires invisibles avec aligneurs modernes.',
      features: ['Aligneurs transparents', 'Traitement discret', 'Confort optimal', 'Résultats prévisibles'],
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Soins Dentaires',
      icon: <Stethoscope className="w-8 h-8" />,
      description: 'Prévention, détartrage et soins complets pour la santé bucco-dentaire.',
      features: ['Nettoyage professionnel', 'Soins préventifs', 'Traitement caries', 'Soins gencives'],
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            backgroundImage: 'url(https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Des traitements de pointe pour tous vos besoins dentaires
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <h2 className="text-4xl font-bold text-slate-800 mb-6">
                    {service.name}
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="tel:+212524890021"
                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                  >
                    Prendre Rendez-vous
                  </a>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  {/* Floating rating card */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      Satisfaction garantie
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Prêt à transformer votre sourire ?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+212524890021"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 transform flex items-center space-x-3"
            >
              <span>Appeler maintenant</span>
            </a>
            
            <a 
              href="https://wa.me/212524890021"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500 text-green-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center space-x-3"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;