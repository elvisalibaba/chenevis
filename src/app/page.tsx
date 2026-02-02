"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Droplets, Package, Target, Zap, Sprout, ArrowRight, 
  Menu, X, History, ShieldCheck, Leaf, MapPin, Phone, Mail,
  Star, Send, Facebook, Instagram, Linkedin, Globe,
  Truck, CheckCircle, Clock, Users, Award, ChevronRight,
  Fish, Utensils, Leaf as LeafIcon, Globe as GlobeIcon
} from 'lucide-react';

// Données de traduction
const translations = {
  fr: {
    // Navigation
    nav: {
      about: "À Propos",
      categories: "Nos Catégories",
      products: "Produits",
      contact: "Contact",
      company: "SCA de la Maladière",
      since: "Depuis 1964"
    },
    
    // Hero
    hero: {
      title: "L'Excellence du Chanvre",
      subtitle: "depuis 1964",
      description: "Producteur français de chènevis premium pour la pêche, l'alimentaire et la cosmétique",
      cta: "Découvrir notre entreprise",
      badges: {
        fishing: "Pêche Sportive",
        food: "Alimentaire Bio",
        cosmetic: "Cosmétique Naturelle"
      }
    },
    
    // Entreprise
    company: {
      title: "SCA de la Maladière",
      subtitle: "Société Coopérative Agricole spécialisée dans la culture et transformation du chanvre depuis 1964",
      sectionTitle: "Une histoire familiale au cœur du Barrois",
      description1: "Fondée en 1964 à Magnant dans l'Aube, la SCA de la Maladière est une coopérative agricole familiale spécialisée dans la culture des céréales et oléagineux.",
      quote: "Notre passion pour le chanvre nous a conduit à développer trois filières d'excellence : la pêche avec notre chènevis renommé, l'alimentaire bio, et les cosmétiques naturels.",
      description2: "Aujourd'hui dirigée par la troisième génération, nous combinons savoir-faire traditionnel et innovation pour offrir des produits de qualité supérieure.",
      history: "60 ans d'expertise"
    },
    
    // Catégories
    categories: {
      title: "Nos Trois Filières d'Excellence",
      subtitle: "Découvrez nos spécialités développées avec passion depuis 60 ans",
      fishing: {
        title: "Pêche",
        description: "Chènevis de qualité supérieure pour la pêche sportive et loisir",
        products: ["Chènevis Monstre", "Amorçage", "Pellets", "Graines naturelles"]
      },
      food: {
        title: "Alimentaire",
        description: "Produits chanvre alimentaires bio pour une nutrition saine",
        products: ["Huile de chènevis", "Graines décortiquées", "Farine de chanvre", "Protéines végétales"]
      },
      cosmetic: {
        title: "Cosmétique",
        description: "Soins naturels à base d'huile de chanvre pressée à froid",
        products: ["Huile cosmétique", "Baumes", "Savons", "Crèmes hydratantes"]
      },
      seeProducts: "Voir les produits"
    },
    
    // Statistiques
    stats: {
      experience: "Ans d'expérience",
      hectares: "Hectares cultivés",
      sectors: "Filières d'excellence",
      french: "Production française"
    },
    
    // Processus
    process: {
      title: "Notre Processus d'Excellence",
      subtitle: "De la graine à l'emballage, chaque étape est maîtrisée pour garantir une qualité premium",
      steps: [
        {
          title: "Culture Bio",
          description: "Agriculture durable sans pesticides sur les terres du Barrois."
        },
        {
          title: "Récolte à Maturité",
          description: "Moisson au moment optimal pour préserver les qualités nutritionnelles."
        },
        {
          title: "Transformation",
          description: "Pressage à froid et transformation dans notre atelier."
        },
        {
          title: "Contrôle Qualité",
          description: "Analyses laboratoire pour garantir pureté et fraîcheur."
        },
        {
          title: "Conditionnement",
          description: "Emballage sous atmosphère protectrice."
        },
        {
          title: "Livraison",
          description: "Expédition en France et Europe avec suivi."
        }
      ]
    },
    
    // Produits
    products: {
      title: "Nos Produits",
      subtitle: "Découvrez notre gamme complète pour la pêche, l'alimentaire et la cosmétique",
      filters: {
        all: "Tous les produits",
        fishing: "Pêche",
        food: "Alimentaire",
        cosmetic: "Cosmétique"
      },
      items: [
        {
          title: "Chènevis Monstre",
          sizes: "500g • 2kg • 5kg",
          desc: "Graines de calibre supérieur sélectionnées pour les spécimens."
        },
        {
          title: "Huile de Chènevis Alimentaire",
          sizes: "250ml • 500ml • 1L",
          desc: "Huile vierge pressée à froid, riche en oméga-3 et oméga-6."
        },
        {
          title: "Pellets pour Pêche",
          sizes: "3kg • 5kg • 10kg",
          desc: "Compression de chènevis pour une diffusion lente."
        },
        {
          title: "Huile Cosmétique Chanvre",
          sizes: "50ml • 100ml • 250ml",
          desc: "Huile pure pour soins cutanés, riche en antioxydants."
        },
        {
          title: "Amorçage Premium",
          sizes: "5kg • 10kg • 20kg",
          desc: "Mélange équilibré pour un tapis d'alimentation riche."
        },
        {
          title: "Farine de Chanvre",
          sizes: "500g • 1kg • 3kg",
          desc: "Farine riche en protéines pour pains et pâtisseries."
        }
      ],
      cta: "Demander un tarif"
    },
    
    // Certifications
    certifications: {
      title: "Nos Engagements Qualité",
      license: "Agrément Sanitaire : FR36328476346",
      items: [
        {
          title: "Agriculture Durable",
          description: "Pratiques culturales respectueuses de l'environnement"
        },
        {
          title: "Transformation Locale",
          description: "Pressage et mouture réalisés sur notre exploitation"
        },
        {
          title: "Traçabilité Totale",
          description: "De la graine au produit fini, nous maîtrisons toute la chaîne"
        },
        {
          title: "Normes Sanitaires",
          description: "Production contrôlée répondant aux normes les plus strictes"
        }
      ]
    },
    
    // Footer
    footer: {
      description: "Société Coopérative Agricole spécialisée dans le chanvre depuis 1964",
      sectors: "Nos Filières",
      fishingSector: "Chènevis pour la pêche",
      foodSector: "Produits chanvre alimentaires",
      cosmeticSector: "Cosmétiques naturels",
      contact: "Contact Direct",
      copyright: "© 2024 SCA de la Maladière — Tous droits réservés",
      legal: "Mentions légales",
      terms: "CGV",
      privacy: "Politique de confidentialité"
    }
  },
  
  en: {
    // Navigation
    nav: {
      about: "About",
      categories: "Our Categories",
      products: "Products",
      contact: "Contact",
      company: "SCA de la Maladière",
      since: "Since 1964"
    },
    
    // Hero
    hero: {
      title: "Hemp Excellence",
      subtitle: "since 1964",
      description: "French producer of premium hemp seeds for fishing, food, and cosmetics",
      cta: "Discover our company",
      badges: {
        fishing: "Sport Fishing",
        food: "Organic Food",
        cosmetic: "Natural Cosmetics"
      }
    },
    
    // Entreprise
    company: {
      title: "SCA de la Maladière",
      subtitle: "Agricultural Cooperative specialized in hemp cultivation and processing since 1964",
      sectionTitle: "A family history in the heart of Barrois",
      description1: "Founded in 1964 in Magnant, Aube, SCA de la Maladière is a family agricultural cooperative specialized in cereal and oilseed cultivation.",
      quote: "Our passion for hemp led us to develop three areas of excellence: fishing with our renowned hemp seeds, organic food, and natural cosmetics.",
      description2: "Now led by the third generation, we combine traditional know-how and innovation to offer superior quality products.",
      history: "60 years of expertise"
    },
    
    // Catégories
    categories: {
      title: "Our Three Areas of Excellence",
      subtitle: "Discover our specialties developed with passion for 60 years",
      fishing: {
        title: "Fishing",
        description: "Premium quality hemp seeds for sport and recreational fishing",
        products: ["Monster Hemp Seeds", "Groundbait", "Pellets", "Natural Seeds"]
      },
      food: {
        title: "Food",
        description: "Organic hemp food products for healthy nutrition",
        products: ["Hemp Seed Oil", "Shelled Seeds", "Hemp Flour", "Plant Proteins"]
      },
      cosmetic: {
        title: "Cosmetics",
        description: "Natural care products based on cold-pressed hemp oil",
        products: ["Cosmetic Oil", "Balms", "Soaps", "Moisturizing Creams"]
      },
      seeProducts: "View products"
    },
    
    // Statistiques
    stats: {
      experience: "Years of experience",
      hectares: "Hectares cultivated",
      sectors: "Areas of excellence",
      french: "French production"
    },
    
    // Processus
    process: {
      title: "Our Excellence Process",
      subtitle: "From seed to packaging, every step is mastered to guarantee premium quality",
      steps: [
        {
          title: "Organic Farming",
          description: "Sustainable agriculture without pesticides on Barrois lands."
        },
        {
          title: "Harvest at Maturity",
          description: "Harvest at optimal time to preserve nutritional qualities."
        },
        {
          title: "Processing",
          description: "Cold pressing and processing in our workshop."
        },
        {
          title: "Quality Control",
          description: "Laboratory analysis to guarantee purity and freshness."
        },
        {
          title: "Packaging",
          description: "Packaging under protective atmosphere."
        },
        {
          title: "Delivery",
          description: "Shipping in France and Europe with tracking."
        }
      ]
    },
    
    // Produits
    products: {
      title: "Our Products",
      subtitle: "Discover our complete range for fishing, food, and cosmetics",
      filters: {
        all: "All products",
        fishing: "Fishing",
        food: "Food",
        cosmetic: "Cosmetics"
      },
      items: [
        {
          title: "Monster Hemp Seeds",
          sizes: "500g • 2kg • 5kg",
          desc: "Premium caliber seeds selected for specimens."
        },
        {
          title: "Food Grade Hemp Seed Oil",
          sizes: "250ml • 500ml • 1L",
          desc: "Virgin cold-pressed oil, rich in omega-3 and omega-6."
        },
        {
          title: "Fishing Pellets",
          sizes: "3kg • 5kg • 10kg",
          desc: "Compressed hemp seeds for slow release."
        },
        {
          title: "Cosmetic Hemp Oil",
          sizes: "50ml • 100ml • 250ml",
          desc: "Pure oil for skin care, rich in antioxidants."
        },
        {
          title: "Premium Groundbait",
          sizes: "5kg • 10kg • 20kg",
          desc: "Balanced mixture for rich feeding ground."
        },
        {
          title: "Hemp Flour",
          sizes: "500g • 1kg • 3kg",
          desc: "Protein-rich flour for breads and pastries."
        }
      ],
      cta: "Request a quote"
    },
    
    // Certifications
    certifications: {
      title: "Our Quality Commitments",
      license: "Health License: FR36328476346",
      items: [
        {
          title: "Sustainable Agriculture",
          description: "Environmentally respectful farming practices"
        },
        {
          title: "Local Processing",
          description: "Pressing and milling done on our farm"
        },
        {
          title: "Full Traceability",
          description: "From seed to finished product, we control the entire chain"
        },
        {
          title: "Health Standards",
          description: "Controlled production meeting strictest standards"
        }
      ]
    },
    
    // Footer
    footer: {
      description: "Agricultural Cooperative specialized in hemp since 1964",
      sectors: "Our Sectors",
      fishingSector: "Hemp seeds for fishing",
      foodSector: "Hemp food products",
      cosmeticSector: "Natural cosmetics",
      contact: "Direct Contact",
      copyright: "© 2024 SCA de la Maladière — All rights reserved",
      legal: "Legal notice",
      terms: "Terms & Conditions",
      privacy: "Privacy policy"
    }
  }
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const t = translations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // CATÉGORIES DE PRODUITS
  const categories = [
    {
      title: t.categories.fishing.title,
      icon: <Fish size={24} />,
      description: t.categories.fishing.description,
      color: "bg-blue-50 text-blue-600",
      products: t.categories.fishing.products
    },
    {
      title: t.categories.food.title,
      icon: <Utensils size={24} />,
      description: t.categories.food.description,
      color: "bg-emerald-50 text-emerald-600",
      products: t.categories.food.products
    },
    {
      title: t.categories.cosmetic.title,
      icon: <LeafIcon size={24} />,
      description: t.categories.cosmetic.description,
      color: "bg-purple-50 text-purple-600",
      products: t.categories.cosmetic.products
    }
  ];

  const products = [
    {
      title: t.products.items[0].title,
      category: "fishing",
      img: "/images/monstre4.jpeg", 
      sizes: t.products.items[0].sizes,
      desc: t.products.items[0].desc,
      icon: <Zap size={18} />,
      color: "bg-amber-50 text-amber-600",
      popular: true
    },
    {
      title: t.products.items[1].title,
      category: "food",
      img: "/images/huil7.jpeg", 
      sizes: t.products.items[1].sizes,
      desc: t.products.items[1].desc,
      icon: <Droplets size={18} />,
      color: "bg-emerald-50 text-emerald-600",
      popular: true
    },
    {
      title: t.products.items[2].title,
      category: "fishing",
      img: "/images/pallets1.jpeg", 
      sizes: t.products.items[2].sizes,
      desc: t.products.items[2].desc,
      icon: <Package size={18} />,
      color: "bg-blue-50 text-blue-600",
      popular: true
    },
    {
      title: t.products.items[3].title,
      category: "cosmetic",
      img: "/images/huile-cosmetique.jpg", 
      sizes: t.products.items[3].sizes,
      desc: t.products.items[3].desc,
      icon: <LeafIcon size={18} />,
      color: "bg-purple-50 text-purple-600",
      popular: false
    },
    {
      title: t.products.items[4].title,
      category: "fishing",
      img: "/images/amorcage1.jpeg", 
      sizes: t.products.items[4].sizes,
      desc: t.products.items[4].desc,
      icon: <Target size={18} />,
      color: "bg-red-50 text-red-600",
      popular: false
    },
    {
      title: t.products.items[5].title,
      category: "food",
      img: "/images/farine1.jpeg", 
      sizes: t.products.items[5].sizes,
      desc: t.products.items[5].desc,
      icon: <Sprout size={18} />,
      color: "bg-emerald-100 text-emerald-800",
      popular: true
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: t.process.steps[0].title,
      description: t.process.steps[0].description,
      icon: <Sprout size={24} />
    },
    {
      number: "02",
      title: t.process.steps[1].title,
      description: t.process.steps[1].description,
      icon: <Clock size={24} />
    },
    {
      number: "03",
      title: t.process.steps[2].title,
      description: t.process.steps[2].description,
      icon: <Droplets size={24} />
    },
    {
      number: "04",
      title: t.process.steps[3].title,
      description: t.process.steps[3].description,
      icon: <ShieldCheck size={24} />
    },
    {
      number: "05",
      title: t.process.steps[4].title,
      description: t.process.steps[4].description,
      icon: <Package size={24} />
    },
    {
      number: "06",
      title: t.process.steps[5].title,
      description: t.process.steps[5].description,
      icon: <Truck size={24} />
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", url: "https://facebook.com/scamaladiere", color: "hover:text-blue-600" },
    { icon: <Instagram size={20} />, label: "Instagram", url: "https://instagram.com/scamaladiere", color: "hover:text-pink-600" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", url: "https://linkedin.com/company/scamaladiere", color: "hover:text-blue-500" },
    { icon: <Globe size={20} />, label: "Site Web", url: "https://scamaladiere.com", color: "hover:text-emerald-500" }
  ];

  return (
    <main className="relative min-h-screen bg-[#fcfcf9] text-[#164228] selection:bg-emerald-100">
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 z-[100] origin-left" style={{ scaleX }} />

      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-[60] bg-white/90 backdrop-blur-md border-b border-emerald-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/carousel-1.png" 
              alt="Logo SCA de la Maladière" 
              width={120} 
              height={36} 
              className="object-contain"
              priority
            />
            <span className="hidden md:inline text-xs font-medium text-emerald-700 border-l border-emerald-200 pl-3">
              {t.nav.since}
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Sélecteur de langue */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'fr' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
              >
                EN
              </button>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <a href="#entreprise" className="hover:text-emerald-600 transition-colors duration-300">{t.nav.about}</a>
              <a href="#categories" className="hover:text-emerald-600 transition-colors duration-300">{t.nav.categories}</a>
              <a href="#produits" className="hover:text-emerald-600 transition-colors duration-300">{t.nav.products}</a>
              <a href="#contact" className="bg-[#164228] text-white px-4 py-2 rounded-full hover:bg-[#0f2f1c] transition-colors duration-300 shadow-sm">
                {t.nav.contact}
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sélecteur de langue mobile */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === 'fr' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-100 text-emerald-700'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-100 text-emerald-700'
                }`}
              >
                EN
              </button>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-emerald-900 p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-50 bg-white border-b border-emerald-100 md:hidden"
          >
            <div className="flex flex-col p-4">
              <a href="#entreprise" className="py-3 px-4 hover:bg-emerald-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                {t.nav.about}
              </a>
              <a href="#categories" className="py-3 px-4 hover:bg-emerald-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                {t.nav.categories}
              </a>
              <a href="#produits" className="py-3 px-4 hover:bg-emerald-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                {t.nav.products}
              </a>
              <a href="#contact" className="py-3 px-4 bg-[#164228] text-white rounded-lg mt-2" onClick={() => setIsMenuOpen(false)}>
                {t.nav.contact}
              </a>
              
              {/* Sélecteur de langue dans le menu mobile */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-emerald-100">
                <div className="text-xs font-medium text-slate-600 mb-2">{language === 'fr' ? 'Langue :' : 'Language:'}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setLanguage('fr'); setIsMenuOpen(false); }}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      language === 'fr' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsMenuOpen(false); }}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      language === 'en' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 mt-4 pt-4 border-t border-emerald-100">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg ${social.color} transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 1. HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a1f13] overflow-hidden pt-16">
        <motion.div 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5 }} 
          className="absolute inset-0 opacity-40"
        >
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Culture de chanvre" 
            fill 
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span className="text-sm text-white">{t.nav.company}</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            {t.hero.title}
            <span className="block text-emerald-300 font-normal italic">{t.hero.subtitle}</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-emerald-50/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Fish size={16} className="text-emerald-400" />
              <span className="text-sm text-white">{t.hero.badges.fishing}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Utensils size={16} className="text-emerald-400" />
              <span className="text-sm text-white">{t.hero.badges.food}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <LeafIcon size={16} className="text-emerald-400" />
              <span className="text-sm text-white">{t.hero.badges.cosmetic}</span>
            </div>
          </motion.div>
          <motion.a 
            href="#entreprise"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#164228] rounded-full font-medium hover:bg-emerald-50 transition-colors duration-300"
          >
            {t.hero.cta}
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </section>

      {/* --- 2. PRÉSENTATION ENTREPRISE --- */}
      <section id="entreprise" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">{t.company.title}</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            {t.company.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 text-emerald-700 font-medium uppercase text-xs tracking-wider mb-4">
              <History size={14} /> {t.company.history}
            </div>
            <h3 className="text-xl sm:text-2xl font-serif mb-6 leading-snug">
              {t.company.sectionTitle}
            </h3>
            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                {t.company.description1}
              </p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600 my-6">
                <p className="text-[#164228] italic">
                  "{t.company.quote}"
                </p>
              </div>
              <p className="leading-relaxed">
                {t.company.description2}
              </p>
            </div>
          </motion.div>
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/ferme.jpg" 
                alt="Ferme SCA de la Maladière" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/graine.jpg" 
                alt="Atelier de transformation" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/germ.jpg" 
                alt="Équipe SCA de la Maladière" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/germi.jpg" 
                alt="Certifications qualité" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. NOS CATÉGORIES --- */}
      <section id="categories" className="py-16 md:py-24 bg-emerald-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">{t.categories.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t.categories.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-6 ${category.color} flex items-center justify-between`}>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm opacity-90 mt-1">{category.description}</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-slate-700 mb-3">
                    {language === 'fr' ? 'Produits phares :' : 'Featured products:'}
                  </h4>
                  <ul className="space-y-2">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle size={14} className="text-emerald-500" />
                        <span className="text-sm">{product}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#produits" 
                    className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm mt-6 hover:gap-2 transition-all"
                  >
                    {t.categories.seeProducts}
                    <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. STATISTIQUES --- */}
      <section className="py-12 md:py-16 bg-[#164228] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "60", label: t.stats.experience, suffix: "+" },
              { number: "500", label: t.stats.hectares, suffix: "+" },
              { number: "3", label: t.stats.sectors, suffix: "" },
              { number: "100%", label: t.stats.french, suffix: "" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.number}<span className="text-emerald-400">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-emerald-200/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. PROCESSUS --- */}
      <section id="processus" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">{t.process.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-emerald-100">{step.number}</div>
                    <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#164228]">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. PRODUITS PAR CATÉGORIE --- */}
      <section id="produits" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">{t.products.title}</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-5 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium">
            {t.products.filters.all}
          </button>
          <button className="px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200">
            {t.products.filters.fishing}
          </button>
          <button className="px-5 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium hover:bg-emerald-200">
            {t.products.filters.food}
          </button>
          <button className="px-5 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-200">
            {t.products.filters.cosmetic}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              whileHover={{ y: -8 }} 
              className="group bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Badge catégorie */}
              <div className="absolute top-4 left-4 z-10">
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                  p.category === 'fishing' ? 'bg-blue-100 text-blue-600' :
                  p.category === 'food' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {language === 'fr' ? 
                    (p.category === 'fishing' ? 'pêche' : p.category === 'food' ? 'alimentaire' : 'cosmétique') :
                    p.category
                  }
                </div>
              </div>
              
              {p.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                    {language === 'fr' ? 'Populaire' : 'Popular'}
                  </div>
                </div>
              )}
              
              <div className="relative h-48 sm:h-56 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wide text-[#164228]">
                  {p.sizes}
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-emerald-600 mb-3">
                  {p.icon} 
                  <span className="text-xs font-semibold uppercase tracking-wide">{t.nav.company}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#164228]">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <button className="w-full py-3 bg-[#164228] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors duration-300 group/btn">
                  {t.products.cta}
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 7. CERTIFICATIONS --- */}
      <section id="pourquoi" className="py-16 md:py-24 bg-[#164228] text-white mx-4 rounded-3xl overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">{t.certifications.title}</h2>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="text-emerald-400" size={24} />
              <p className="text-emerald-200/70 uppercase tracking-wider text-xs font-medium">
                {t.certifications.license}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
            {t.certifications.items.map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp} 
                transition={{ delay: i * 0.1 }} 
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-emerald-400 mb-4">
                  <CheckCircle size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-emerald-100/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. CONTACT & FOOTER --- */}
      <footer id="contact" className="bg-[#0a1f13] text-white pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            <div className="space-y-6">
              <div>
                <Image 
                  src="/images/carousel-1.png" 
                  alt="Logo SCA de la Maladière" 
                  width={140} 
                  height={42} 
                  className="grayscale invert brightness-0 mb-4"
                />
                <p className="text-sm text-emerald-200/70">
                  {t.footer.description}
                </p>
              </div>
              <div className="flex items-start gap-3 opacity-80">
                <MapPin size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>34 rue Maréchal Leclerc, 10110 Magnant</span>
              </div>
              <p className="text-xs uppercase tracking-wide opacity-50">
                {t.certifications.license}
              </p>
            </div>
            
            <div className="space-y-6">
              <h5 className="font-semibold uppercase tracking-wide text-sm text-emerald-500">
                {t.footer.sectors}
              </h5>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Fish size={16} className="text-emerald-400" />
                  <span>{t.footer.fishingSector}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils size={16} className="text-emerald-400" />
                  <span>{t.footer.foodSector}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LeafIcon size={16} className="text-emerald-400" />
                  <span>{t.footer.cosmeticSector}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="font-semibold uppercase tracking-wide text-sm text-emerald-500">
                {t.footer.contact}
              </h5>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@scamaladiere.com" 
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  contact@scamaladiere.com
                </a>
                <a 
                  href="tel:+33688566627" 
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  +33 (0)6 88 56 66 27
                </a>
              </div>
              
              {/* Sélecteur de langue dans le footer */}
              <div className="pt-4 border-t border-white/10">
                <h6 className="text-xs uppercase tracking-wide opacity-70 mb-2">
                  {language === 'fr' ? 'Langue' : 'Language'}
                </h6>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      language === 'fr' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      language === 'en' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 rounded-lg ${social.color} transition-all duration-300 hover:bg-white/10`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs uppercase tracking-wider opacity-40">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-xs opacity-60">
              <a href="#" className="hover:text-emerald-400 transition-colors">{t.footer.legal}</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">{t.footer.privacy}</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}