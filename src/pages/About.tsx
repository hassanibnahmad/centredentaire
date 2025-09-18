import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Une expertise reconnue en implantologie et soins esthétiques'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Équipe experte',
      description: 'Des professionnels qualifiés et à l\'écoute de vos besoins'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Disponibilité',
      description: 'Des horaires flexibles pour s\'adapter à votre emploi du temps'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Localisation',
      description: 'Situé au cœur de Ouarzazate pour votre commodité'
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
            backgroundImage: 'url(https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            À Propos du Centre Dentaire 3 Mars
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour un sourire éclatant et une santé bucco-dentaire optimale
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Situé à Ouarzazate, le Centre Dentaire 3 Mars est spécialisé en implantologie, orthodontie, blanchiment et soins dentaires. Notre équipe expérimentée vous garantit un sourire éclatant et une santé bucco-dentaire optimale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Nous nous engageons à fournir des soins dentaires de la plus haute qualité dans un environnement moderne et accueillant, en utilisant les technologies les plus avancées pour garantir votre confort et votre satisfaction.
              </p>
              <a 
                href="tel:+212524890021"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              >
                Prendre Rendez-vous
              </a>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Centre Dentaire"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-2xl">10+</p>
                <p className="text-sm">Années d'expérience</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ce qui nous guide au quotidien dans nos soins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Qualité</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous utilisons les meilleurs matériaux et techniques pour garantir des résultats durables et esthétiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-slate-900 text-2xl font-bold">C</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Confort</h3>
              <p className="text-slate-600 leading-relaxed">
                Votre bien-être est notre priorité. Nous créons un environnement relaxant et rassurant pour tous nos patients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous investissons continuellement dans les dernières technologies pour vous offrir les meilleurs soins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;