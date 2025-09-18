import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      before: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      title: 'Küche Grundreinigung',
      description: 'Komplette Küchenreinigung mit Entfettung und Desinfektion'
    },
    {
      id: 2,
      before: 'https://images.pexels.com/photos/6195070/pexels-photo-6195070.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/6195269/pexels-photo-6195269.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      title: 'Badezimmer Sanierung',
      description: 'Gründliche Badreinigung mit Kalk- und Schimmelentfernung'
    },
    {
      id: 3,
      before: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      title: 'Wohnzimmer Reinigung',
      description: 'Komplette Wohnbereichsreinigung mit Polsterpflege'
    },
    {
      id: 4,
      before: 'https://images.pexels.com/photos/6195084/pexels-photo-6195084.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/6195086/pexels-photo-6195086.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      title: 'Büroreinigung',
      description: 'Professionelle Büroreinigung mit Desinfektion'
    },
    {
      id: 5,
      before: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      title: 'Fensterreinigung',
      description: 'Streifenfreie Fensterreinigung innen und außen'
    },
    {
      id: 6,
      before: 'https://images.pexels.com/photos/4239088/pexels-photo-4239088.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/4239090/pexels-photo-4239090.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      title: 'Teppichreinigung',
      description: 'Tiefenreinigung von Teppichen und Polstermöbeln'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Arbeit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie wir aus verschmutzten Räumen saubere, 
            einladende Bereiche schaffen. Vorher-Nachher-Bilder unserer Projekte.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <img 
                      src={image.before}
                      alt={`${image.title} - Vorher`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      VORHER
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <img 
                      src={image.after}
                      alt={`${image.title} - Nachher`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      NACHHER
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              
              {/* Image Content */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={galleryImages[selectedImage].before}
                      alt={`${galleryImages[selectedImage].title} - Vorher`}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-semibold">
                      VORHER
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={galleryImages[selectedImage].after}
                      alt={`${galleryImages[selectedImage].title} - Nachher`}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-semibold">
                      NACHHER
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Überzeugt von unserer Qualität?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns auch Ihr Zuhause oder Büro in neuem Glanz erstrahlen. 
              Kontaktieren Sie uns für ein kostenloses Beratungsgespräch.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;