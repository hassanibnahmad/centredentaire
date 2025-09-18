import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_vra8cvo',
      'template_gf6c71j',
      {
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        message: formData.message,
      },
      'o0j0yE9yY-q1lD69T'
    )
    .then(() => {
      alert('Message envoyé avec succès ! Nous vous contacterons bientôt.');
      setFormData({ nom: '', email: '', telephone: '', message: '' });
    })
    .catch(() => {
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Prenez rendez-vous dès aujourd'hui pour votre consultation
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Demande de rendez-vous
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-800 placeholder-slate-400"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-800 placeholder-slate-400"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-800 placeholder-slate-400"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none"
                    placeholder="Décrivez votre demande ou vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Informations de contact
                </h2>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <a 
                  href="tel:+212524890021"
                  className="group block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                        Téléphone
                      </h3>
                      <p className="text-slate-600">+212 524 890 021</p>
                    </div>
                  </div>
                </a>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        Adresse
                      </h3>
                      <p className="text-slate-600">Centre Dentaire 3 Mars<br />Ouarzazate, Maroc</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-slate-900">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        Horaires
                      </h3>
                      <p className="text-slate-600">
                        Lun - Ven: 9h00 - 18h00<br />
                        Sam: 9h00 - 16h00<br />
                        Dim: Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Suivez-nous
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://instagram.com/centre.dentaire3mars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white"
                  >
                    <Instagram className="w-5 h-5 text-pink-500 group-hover:text-white" />
                    <span className="font-medium text-slate-700 group-hover:text-white">Instagram</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white ml-auto" />
                  </a>

                  <a
                    href="https://facebook.com/centre.dentaire3mars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center space-x-3 hover:bg-blue-600 hover:text-white"
                  >
                    <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white" />
                    <span className="font-medium text-slate-700 group-hover:text-white">Facebook</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white ml-auto" />
                  </a>

                  <a
                    href="https://wa.me/212524890021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center space-x-3 hover:bg-green-500 hover:text-white"
                  >
                    <MessageCircle className="w-5 h-5 text-green-500 group-hover:text-white" />
                    <span className="font-medium text-slate-700 group-hover:text-white">WhatsApp</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white ml-auto" />
                  </a>

                  <a
                    href="https://goo.gl/maps/centre-dentaire-3mars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center space-x-3 hover:bg-red-500 hover:text-white"
                  >
                    <MapPin className="w-5 h-5 text-red-500 group-hover:text-white" />
                    <span className="font-medium text-slate-700 group-hover:text-white">Maps</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Urgence dentaire ?</h2>
          <p className="text-xl text-red-100 mb-8">
            En cas d'urgence, contactez-nous immédiatement
          </p>
          <a
            href="tel:+212524890021"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
          >
            Appel d'urgence: +212 524 890 021
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;