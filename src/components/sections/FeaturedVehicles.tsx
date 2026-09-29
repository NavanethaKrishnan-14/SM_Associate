'use client';

import Image from 'next/image';
import { Fuel, Calendar, MapPin, ChevronRight, ShieldCheck, Zap, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const featuredVehicles = [
  {
    id: 1,
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi',
    year: 2022,
    price: '₹5.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Manual',
    location: 'Tirunelveli',
    badge: 'Certified',
    image: '/vehicles/swift.jpg',
  },
  {
    id: 2,
    brand: 'Hyundai',
    model: 'i20 Asta',
    year: 2021,
    price: '₹6.2 Lakhs',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    location: 'Tirunelveli',
    badge: 'Popular',
    image: '/vehicles/i20.jpg',
  },
  {
    id: 3,
    brand: 'Honda',
    model: 'City V',
    year: 2023,
    price: '₹9.5 Lakhs',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    location: 'Tirunelveli',
    badge: 'Top Rated',
    image: '/vehicles/city.jpg',
  },
];

export default function FeaturedVehicles() {
  return (
    <section className="py-20 bg-gradient-navy-accent relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
              <Zap size={16} className="text-gold-primary" aria-hidden="true" />
              <span className="text-gold-primary font-semibold text-sm tracking-wide">PREMIUM VEHICLES</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Featured Pre-Owned
              <span className="block bg-gradient-gold bg-clip-text text-transparent">Vehicles</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              Handpicked selection of verified, quality-assured vehicles ready for your next journey
            </p>
          </div>

          <Link 
            href={ROUTES.VEHICLES} 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-navy font-bold rounded-xl hover:shadow-lg hover:shadow-gold-primary/50 transition-all transform hover:scale-105 whitespace-nowrap h-fit"
          >
            <span>Browse All Vehicles</span>
            <ChevronRight size={20} aria-hidden="true" />
          </Link>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle, idx) => (
            <div
              key={vehicle.id}
              className="group relative h-full bg-navy/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gold-primary/20 hover:border-gold-primary/50 shadow-lg hover:shadow-2xl hover:shadow-gold-primary/30 transition-all duration-300 hover:-translate-y-3 cursor-pointer flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => window.location.href = `${ROUTES.VEHICLES}/${vehicle.id}`}
            >
              {/* Vehicle Image Container */}
              <div className="h-64 w-full relative overflow-hidden bg-navy">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model} - Premium Pre-Owned Vehicle`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Premium overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-black/20 group-hover:from-navy/70 transition-all" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 gap-3">
                  <span className="px-4 py-2 rounded-lg text-sm font-bold text-navy bg-gradient-gold shadow-lg">
                    {vehicle.badge}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-white font-semibold bg-navy/60 backdrop-blur-md px-3 py-2 rounded-lg border border-gold-primary/50">
                    <ShieldCheck size={16} className="text-gold-primary" aria-hidden="true" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Bottom overlay text */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-gold-light text-xs font-bold uppercase tracking-widest mb-1">
                    {vehicle.brand}
                  </p>
                  <h3 className="text-white text-2xl font-black drop-shadow-lg">
                    {vehicle.model}
                  </h3>
                </div>
              </div>
              {/* Vehicle Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                {/* Price */}
                <div className="pb-4 border-b border-gold-primary/20">
                  <p className="text-4xl font-black text-gold-primary">
                    {vehicle.price}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-navy/40 border border-gold-primary/20 text-center">
                    <Calendar size={18} className="text-gold-primary mx-auto mb-1" aria-hidden="true" />
                    <p className="text-xs text-white/70 font-semibold">{vehicle.year}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-navy/40 border border-gold-primary/20 text-center">
                    <Fuel size={18} className="text-gold-primary mx-auto mb-1" aria-hidden="true" />
                    <p className="text-xs text-white/70 font-semibold">{vehicle.fuelType}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-navy/40 border border-gold-primary/20 text-center">
                    <MapPin size={18} className="text-gold-primary mx-auto mb-1" aria-hidden="true" />
                    <p className="text-xs text-white/70 font-semibold">{vehicle.location}</p>
                  </div>
                </div>

                {/* Transmission */}
                <div className="py-3 px-4 rounded-lg bg-gold-primary/10 border border-gold-primary/30">
                  <p className="text-sm text-white font-semibold">
                    <span className="text-gold-primary">Transmission:</span> {vehicle.transmission}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
                  <button className="py-3 px-4 bg-gradient-gold text-navy font-bold rounded-lg hover:shadow-lg transition-all text-sm text-center transform hover:scale-105">
                    View Details
                  </button>
                  <a
                    href="https://wa.me/919790219874"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-3 px-4 border-2 border-gold-primary text-gold-primary font-bold rounded-lg hover:bg-gold-primary/20 transition-all text-sm text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-navy/40 backdrop-blur-sm border border-gold-primary/20">
            <p className="text-lg text-white font-semibold max-w-xl">
              Looking for the perfect vehicle? Our team is ready to help you find exactly what you need.
            </p>
            <a
              href="tel:+919790219874"
              className="px-8 py-3 bg-gradient-gold text-navy font-bold rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2 transform hover:scale-105"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
