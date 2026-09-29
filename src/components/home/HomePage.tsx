'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Bike,
  BookOpen,
  Briefcase,
  Calculator,
  Car,
  Check,
  ChevronDown,
  Coins,
  Clock,
  FileText,
  Headphones,
  Heart,
  Home,
  Landmark,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Star,
  TrendingUp,
  User,
  Wallet,
  Zap,
} from 'lucide-react';

import { BLOG_POSTS, COMPANY_INFO, ROUTES } from '@/lib/constants';
import { FAQ_DATA } from '@/data/faqData';
import testimonialData from '@/data/testimonialdata';
import Partners from '@/components/sections/Partners';

type IconType = typeof Home;

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  tag: string;
  icon: IconType;
  tone: 'gold' | 'teal' | 'navy';
}

interface VehicleCard {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: string;
  fuel: string;
  transmission: string;
  image: string;
  badge: string;
}

const serviceCards: ServiceCard[] = [
  { title: 'Home Loan', description: 'Plan your home purchase, construction or renovation with structured financing guidance.', href: ROUTES.HOME_LOAN, tag: 'Property', icon: Home, tone: 'gold' },
  { title: 'Car Loan', description: 'Finance a new or pre-owned car with a smoother application journey.', href: ROUTES.CAR_LOAN, tag: 'Mobility', icon: Car, tone: 'teal' },
  { title: 'Gold Loan', description: 'Get practical assistance around gold-backed funding and redemption needs.', href: ROUTES.GOLD_LOAN, tag: 'Secure', icon: Coins, tone: 'gold' },
  { title: 'Personal Loan', description: 'Flexible personal funding for planned expenses and important moments.', href: ROUTES.PERSONAL_LOAN, tag: 'Flexible', icon: User, tone: 'teal' },
  { title: 'Business Loan', description: 'Support working capital, expansion and day-to-day business requirements.', href: ROUTES.BUSINESS_LOAN, tag: 'Business', icon: Briefcase, tone: 'navy' },
  { title: 'Two Wheeler Insurance', description: 'Choose protection options for everyday riding and peace of mind.', href: ROUTES.TWO_WHEELER_INSURANCE, tag: 'Protection', icon: ShieldCheck, tone: 'teal' },
];

const vehicleCards: VehicleCard[] = [
  { id: 1, brand: 'Maruti Suzuki', model: 'Swift ZXi', year: 2022, price: '₹5.5 Lakhs', fuel: 'Petrol', transmission: 'Manual', image: '/vehicles/swift.jpg', badge: 'Certified' },
  { id: 2, brand: 'Hyundai', model: 'i20 Asta', year: 2021, price: '₹6.2 Lakhs', fuel: 'Diesel', transmission: 'Automatic', image: '/vehicles/i20.jpg', badge: 'Popular' },
  { id: 3, brand: 'Honda', model: 'City V', year: 2023, price: '₹9.5 Lakhs', fuel: 'Petrol', transmission: 'Automatic', image: '/vehicles/city.jpg', badge: 'Top Rated' },
];

const workflow = [
  { step: '01', title: 'Tell us what you need', description: 'Choose a loan, vehicle, insurance or resale service.', icon: FileText },
  { step: '02', title: 'Share the essentials', description: 'Give us the details needed to understand your requirement.', icon: Wallet },
  { step: '03', title: 'Get guided', description: 'Our team helps you understand options, documents and next steps.', icon: Headphones },
  { step: '04', title: 'Move forward', description: 'Complete your financing or vehicle transaction with clarity.', icon: CheckCircle },
];

const reasons = [
  { title: 'One place for finance + mobility', description: 'Loans, insurance and vehicle assistance are brought together in one simple experience.', icon: Landmark },
  { title: 'Clear communication', description: 'We keep the journey understandable, with practical guidance at each stage.', icon: MessageCircle },
  { title: 'Local support', description: 'Speak with a team that understands customers and vehicle needs in Tirunelveli.', icon: Heart },
  { title: 'Built for real decisions', description: 'Compare amounts, understand EMIs and explore vehicles before you commit.', icon: TrendingUp },
];

function ServiceGlyph({ icon: Icon }: { icon: IconType }) {
  return <Icon size={24} aria-hidden="true" />;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'left',
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  dark?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div className={'home-v3-heading ' + (align === 'center' ? 'home-v3-heading-center' : '')}>
      <div className="home-v3-eyebrow" data-dark={dark ? 'true' : 'false'}>
        <span className="home-v3-eyebrow-dot" />
        {eyebrow}
      </div>
      <h2 className={dark ? 'home-v3-dark-title' : ''}>{title}</h2>
      <p className={dark ? 'home-v3-dark-copy' : ''}>{description}</p>
    </div>
  );
}

function formatINR(value: number): string {
  return '₹' + Math.round(value).toLocaleString('en-IN');
}

function calculateEMI(principal: number, annualRate: number, months: number): number {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return principal / months;
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}

function Hero3D() {
  return (
    <div className="home-v3-hero-art" aria-hidden="true">
      <div className="home-v3-orbit home-v3-orbit-one" />
      <div className="home-v3-orbit home-v3-orbit-two" />
      <div className="home-v3-glow home-v3-glow-gold" />
      <div className="home-v3-glow home-v3-glow-teal" />

      <div className="home-v3-device home-v3-device-back">
        <div className="home-v3-device-bar" />
        <div className="home-v3-mini-label">SMART FINANCE</div>
        <div className="home-v3-mini-row"><span /><span /></div>
        <div className="home-v3-mini-row"><span /><span className="short" /></div>
        <div className="home-v3-mini-chart"><span /><span /><span /><span /><span /></div>
      </div>

      <div className="home-v3-device home-v3-device-front">
        <div className="home-v3-device-top">
          <div className="home-v3-chip"><ShieldCheck size={17} /></div>
          <div className="home-v3-live"><span /> READY TO MOVE</div>
        </div>
        <div className="home-v3-device-label">SM ASSOCIATE</div>
        <div className="home-v3-device-title">Finance + Mobility</div>
        <div className="home-v3-device-copy">A cleaner route from requirement to result.</div>
        <div className="home-v3-device-footer"><span>TRUST</span><span>CLARITY</span><span>SUPPORT</span></div>
      </div>

      <div className="home-v3-float home-v3-float-one"><Zap size={14} /> Fast guidance</div>
      <div className="home-v3-float home-v3-float-two"><ShieldCheck size={14} /> Clear process</div>
      <div className="home-v3-scene-ground" />
    </div>
  );
}

function Hero() {
  return (
    <section className="premium-page-hero home-v3-hero">
      <div className="home-v3-hero-noise" />
      <div className="home-v3-container home-v3-hero-grid">
        <div className="home-v3-hero-copy">
          <div className="home-v3-eyebrow home-v3-eyebrow-hero">
            <span className="home-v3-eyebrow-dot" />
            SM ASSOCIATE • TIRUNELVELI
          </div>

          <h1>
            Finance that fits your life.
            <span>Mobility that moves you forward.</span>
          </h1>

          <p className="home-v3-hero-lead">
            Explore loans, vehicle buying and selling, insurance and practical financial assistance through one trusted local platform.
          </p>

          <div className="home-v3-hero-actions">
            <Link href={ROUTES.LOANS} className="home-v3-btn home-v3-btn-gold">Explore Finance <ArrowRight size={17} /></Link>
            <Link href={ROUTES.VEHICLES} className="home-v3-btn home-v3-btn-ghost">Browse Vehicles</Link>
          </div>

          <div className="home-v3-hero-trust">
            <div><strong>500+</strong><span>customers served</span></div>
            <div><strong>100+</strong><span>vehicles listed</span></div>
            <div><strong>24–48h</strong><span>fast processing</span></div>
          </div>
        </div>
        <Hero3D />
      </div>

      <div className="home-v3-hero-bottom">
        <div className="home-v3-container home-v3-hero-bottom-inner">
          <div className="home-v3-hero-bottom-pill"><BadgeCheck size={15} /> Local support in Tirunelveli</div>
          <div className="home-v3-hero-bottom-links">
            <a href="tel:+919790219874"><Phone size={15} /> +91 97902 19874</a>
            <a href="https://wa.me/919790219874" target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: 'Clear communication', value: 'Every step explained' },
    { icon: Clock, label: 'Quick response', value: 'Local assistance' },
    { icon: CheckCircle, label: 'Practical options', value: 'Finance + mobility' },
    { icon: Sparkles, label: 'Customer-first', value: 'Built around you' },
  ];
  return (
    <section className="home-v3-section home-v3-trust-section">
      <div className="home-v3-container">
        <div className="home-v3-trust-grid">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="home-v3-trust-item">
              <div className="home-v3-icon home-v3-icon-soft"><Icon size={18} /></div>
              <div><strong>{label}</strong><span>{value}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="home-v3-section home-v3-light">
      <div className="home-v3-container">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title={<>One platform for <span className="home-v3-gradient-text">bigger moves.</span></>}
          description="Choose the service that matches your next step. Each path is designed to feel simpler, cleaner and easier to understand."
          align="center"
        />
        <div className="home-v3-services-grid">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href} className={'home-v3-service-card home-v3-tone-' + service.tone}>
                <div className="home-v3-service-top">
                  <span className="home-v3-service-tag">{service.tag}</span>
                  <ArrowUpRight size={17} className="home-v3-service-arrow" />
                </div>
                <div className="home-v3-icon home-v3-service-icon"><ServiceGlyph icon={Icon} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="home-v3-service-number">0{index + 1}</div>
              </Link>
            );
          })}
        </div>
        <div className="home-v3-inline-note">
          <div><Check size={15} /> Simple navigation</div>
          <div><Check size={15} /> Clear next steps</div>
          <div><Check size={15} /> Local assistance</div>
        </div>
      </div>
    </section>
  );
}

function EMICard() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(60);
  const emi = useMemo(() => calculateEMI(principal, rate, tenure), [principal, rate, tenure]);
  const total = emi * tenure;
  const interest = total - principal;

  return (
    <section className="home-v3-section home-v3-emi-section">
      <div className="home-v3-container">
        <div className="home-v3-emi-shell">
          <div className="home-v3-emi-copy">
            <div className="home-v3-eyebrow"><span className="home-v3-eyebrow-dot" /> CALCULATOR</div>
            <h2>See the numbers before you decide.</h2>
            <p>Adjust the amount, rate and tenure to get a quick monthly EMI estimate.</p>
            <div className="home-v3-emi-stat-row">
              <div><span>Monthly EMI</span><strong>{formatINR(emi)}</strong></div>
              <div><span>Total interest</span><strong>{formatINR(interest)}</strong></div>
            </div>
            <Link href={ROUTES.EMI_CALCULATOR} className="home-v3-text-link">Open full EMI calculator <ArrowRight size={16} /></Link>
          </div>

          <div className="home-v3-emi-panel">
            <div className="home-v3-range-row">
              <div className="home-v3-range-label"><span>Loan amount</span><strong>{formatINR(principal)}</strong></div>
              <input aria-label="Loan amount" type="range" min={50000} max={5000000} step={50000} value={principal} onChange={(event) => setPrincipal(Number(event.target.value))} />
            </div>
            <div className="home-v3-range-row">
              <div className="home-v3-range-label"><span>Interest rate</span><strong>{rate.toFixed(1)}% p.a.</strong></div>
              <input aria-label="Interest rate" type="range" min={3} max={15} step={0.1} value={rate} onChange={(event) => setRate(Number(event.target.value))} />
            </div>
            <div className="home-v3-range-row">
              <div className="home-v3-range-label"><span>Tenure</span><strong>{tenure} months</strong></div>
              <input aria-label="Loan tenure" type="range" min={12} max={360} step={12} value={tenure} onChange={(event) => setTenure(Number(event.target.value))} />
            </div>
            <div className="home-v3-emi-total"><span>Total payable</span><strong>{formatINR(total)}</strong></div>
            <Link href={ROUTES.CONTACT} className="home-v3-btn home-v3-btn-dark">Get a personalised conversation <ArrowRight size={17} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  return (
    <section className="home-v3-section home-v3-soft">
      <div className="home-v3-container">
        <div className="home-v3-section-top">
          <SectionHeading
            eyebrow="VEHICLE MARKETPLACE"
            title={<>A better way to <span className="home-v3-gradient-text-teal">shop used.</span></>}
            description="Explore selected pre-owned cars with clear specs, pricing and a direct route to our team."
          />
          <Link href={ROUTES.VEHICLES} className="home-v3-outline-btn">View all vehicles <ArrowRight size={16} /></Link>
        </div>

        <div className="home-v3-vehicle-grid">
          {vehicleCards.map((vehicle) => (
            <Link key={vehicle.id} href={ROUTES.VEHICLES + '/' + vehicle.id} className="home-v3-vehicle-card">
              <div className="home-v3-vehicle-image">
                <Image src={vehicle.image} alt={vehicle.year + ' ' + vehicle.brand + ' ' + vehicle.model} fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" />
                <div className="home-v3-vehicle-overlay" />
                <span className="home-v3-vehicle-badge">{vehicle.badge}</span>
                <span className="home-v3-vehicle-year">{vehicle.year}</span>
              </div>
              <div className="home-v3-vehicle-body">
                <div className="home-v3-vehicle-brand">{vehicle.brand}</div>
                <h3>{vehicle.model}</h3>
                <div className="home-v3-vehicle-price">{vehicle.price}</div>
                <div className="home-v3-spec-row">
                  <span><Zap size={14} /> {vehicle.fuel}</span>
                  <span><Car size={14} /> {vehicle.transmission}</span>
                </div>
                <div className="home-v3-card-link">View vehicle <ArrowUpRight size={15} /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marketplace() {
  return (
    <section className="home-v3-section home-v3-dark-section">
      <div className="home-v3-container">
        <SectionHeading
          eyebrow="BUY • SELL • FINANCE"
          title={<>Your next vehicle, <span className="home-v3-dark-gradient">one step closer.</span></>}
          description="Use one platform to explore vehicles, understand financing and turn an approved choice into a smooth transaction."
          dark
          align="center"
        />
        <div className="home-v3-market-grid">
          <Link href={ROUTES.VEHICLES + '?type=car'} className="home-v3-market-card">
            <div className="home-v3-market-icon"><Car size={25} /></div>
            <div><span>BUY CARS</span><h3>Find a car that fits your budget.</h3><p>Browse selected pre-owned cars and move directly to the details.</p></div>
            <ArrowUpRight size={20} />
          </Link>
          <Link href={ROUTES.VEHICLES + '?type=bike'} className="home-v3-market-card home-v3-market-teal">
            <div className="home-v3-market-icon"><Bike size={25} /></div>
            <div><span>BUY BIKES</span><h3>Make your everyday mobility easier.</h3><p>Explore bikes and scooters with a clean, simple browsing experience.</p></div>
            <ArrowUpRight size={20} />
          </Link>
          <Link href={ROUTES.SELL_VEHICLE} className="home-v3-market-card home-v3-market-gold">
            <div className="home-v3-market-icon"><HandCoins size={25} /></div>
            <div><span>SELL YOUR VEHICLE</span><h3>Turn your old vehicle into your next move.</h3><p>Start a valuation conversation and get help with the resale journey.</p></div>
            <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="home-v3-market-footer">
          <div><ShieldCheck size={17} /><span>Clear documentation</span></div>
          <div><Calculator size={17} /><span>Finance support</span></div>
          <div><Phone size={17} /><span>Direct team assistance</span></div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="home-v3-section home-v3-light">
      <div className="home-v3-container">
        <SectionHeading eyebrow="THE PROCESS" title={<>Simple from the <span className="home-v3-gradient-text">first click.</span></>} description="A clear four-step journey keeps the experience focused without unnecessary complexity." align="center" />
        <div className="home-v3-process">
          {workflow.map(({ step, title, description, icon: Icon }, index) => (
            <div className="home-v3-process-item" key={step}>
              <div className="home-v3-process-node">
                <span>{step}</span>
                <div className="home-v3-process-icon"><Icon size={20} /></div>
              </div>
              <div className="home-v3-process-content"><h3>{title}</h3><p>{description}</p></div>
              {index < workflow.length - 1 && <div className="home-v3-process-line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="home-v3-section home-v3-soft">
      <div className="home-v3-container home-v3-two-column">
        <div>
          <SectionHeading eyebrow="WHY SM ASSOCIATE" title={<>Designed around <span className="home-v3-gradient-text-teal">real people.</span></>} description="The goal is not more screens. It is better decisions, clearer conversations and a smoother route to your next move." />
          <Link href={ROUTES.ABOUT} className="home-v3-text-link">Learn more about SM Associate <ArrowRight size={16} /></Link>
        </div>
        <div className="home-v3-reasons-grid">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div key={title} className="home-v3-reason-card">
              <div className="home-v3-icon home-v3-icon-gold"><Icon size={19} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="home-v3-section home-v3-white">
      <div className="home-v3-container">
        <div className="home-v3-testimonial-head">
          <SectionHeading eyebrow="CUSTOMER STORIES" title={<>Good service should <span className="home-v3-gradient-text">feel simple.</span></>} description="A selection from the customer stories already used across the site." />
          <div className="home-v3-rating-block">
            <div className="home-v3-stars">{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" />)}</div>
            <strong>4.9 / 5</strong>
            <span>Customer experience snapshot</span>
          </div>
        </div>

        <div className="home-v3-testimonial-grid">
          {testimonialData.slice(0, 3).map((item) => (
            <article key={item.id} className="home-v3-testimonial-card">
              <div className="home-v3-testimonial-top">
                <div className="home-v3-avatar">{item.initials}</div>
                <div><strong>{item.name}</strong><span>{item.role}</span></div>
                <BadgeCheck size={17} className="home-v3-verified" />
              </div>
              <div className="home-v3-testimonial-service">{item.service}</div>
              <p>“{item.message}”</p>
              <div className="home-v3-testimonial-bottom"><span>{item.category}</span><strong>{item.amount}</strong></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="home-v3-section home-v3-soft">
      <div className="home-v3-container">
        <div className="home-v3-section-top">
          <SectionHeading eyebrow="KNOWLEDGE HUB" title={<>Learn before you <span className="home-v3-gradient-text">commit.</span></>} description="Practical guides for loans, EMIs and used-vehicle decisions." />
          <Link href={ROUTES.BLOG} className="home-v3-outline-btn">Explore articles <ArrowRight size={16} /></Link>
        </div>

        <div className="home-v3-insight-grid">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article className="home-v3-insight-card" key={post.id}>
              <div className="home-v3-insight-image">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="home-v3-insight-body">
                <span><BookOpen size={14} /> {post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={'/blog/' + post.slug} className="home-v3-card-link">Read guide <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = FAQ_DATA.home.items.slice(0, 6);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-v3-section home-v3-white">
      <div className="home-v3-container home-v3-faq-wrap">
        <SectionHeading eyebrow="FAQ" title={<>Questions, answered <span className="home-v3-gradient-text-teal">clearly.</span></>} description="A few of the most common questions before getting started." align="center" />
        <div className="home-v3-faq-grid">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className={'home-v3-faq-item ' + (open ? 'is-open' : '')}>
                <button type="button" onClick={() => setOpenIndex(open ? -1 : index)} aria-expanded={open}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.question}</strong>
                  <ChevronDown size={18} className={open ? 'rotate-180' : ''} />
                </button>
                {open && <div className="home-v3-faq-answer">{item.answer}</div>}
              </div>
            );
          })}
        </div>
        <div className="home-v3-faq-footer">
          <span>Need a more specific answer?</span>
          <Link href={ROUTES.CONTACT}>Talk to the team <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="home-v3-section home-v3-final-cta">
      <div className="home-v3-container">
        <div className="home-v3-final-card">
          <div>
            <div className="home-v3-eyebrow home-v3-eyebrow-hero"><span className="home-v3-eyebrow-dot" /> READY WHEN YOU ARE</div>
            <h2>One conversation can make the next step clearer.</h2>
            <p>Tell us whether you are planning a loan, buying a vehicle, selling one or exploring insurance. We will help you find the right starting point.</p>
          </div>
          <div className="home-v3-final-actions">
            <Link href={ROUTES.CONTACT} className="home-v3-btn home-v3-btn-gold">Talk to SM Associate <ArrowRight size={17} /></Link>
            <div className="home-v3-final-contact">
              <a href="tel:+919790219874"><Phone size={15} /> +91 97902 19874</a>
              <a href={'mailto:' + COMPANY_INFO.supportEmail}><MessageCircle size={15} /> Email us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div id="home-v3" className="home-v3">
      <Hero />
      <TrustStrip />
      <Services />
      <EMICard />
      <Vehicles />
      <Marketplace />
      <HowItWorks />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <Insights />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
