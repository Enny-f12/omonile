import Link from 'next/link';
import { Search, SlidersHorizontal, FileText, CalendarDays, BookOpen, CreditCard, MailCheck, KeyRound, ClipboardCheck, Calendar, FileSignature, BedDouble, ArrowRight } from 'lucide-react';
import { StepCard } from './StepCard';

const C = { color:'#1a6b3c', colorBg:'rgba(26,107,60,0.08)', colorBorder:'rgba(26,107,60,0.22)' };
const C2= { color:'#b8832a', colorBg:'rgba(232,168,76,0.09)', colorBorder:'rgba(232,168,76,0.28)' };

const STEPS = [
  { Icon:Search,            title:'Search for Your Perfect Stay',
    description:'Use the search bar to find short-lets or yearly rentals by location, dates, number of guests, and price range.',
    details:['Filter by neighbourhood, LGA, or landmark','Set date range for short-let or move-in date for yearly','Toggle "Facility Manager Verified" for guaranteed quality'] },
  { Icon:SlidersHorizontal, title:'Browse & Filter Results',
    description:'Narrow down results by price, amenities, property type, and verification status. Every card shows the nightly rate and verification badge.',
    details:['Price filter: set min/max per night or per month','Amenity filters: WiFi, AC, parking, kitchen, generator','Sort by: price, rating, newest, most reviewed'] },
  { Icon:FileText,          title:'Review Property Details',
    description:'Open any listing to see the full photo gallery, host profile, house rules, amenities, cancellation policy, and safety score.',
    details:['View facility manager inspection report','Check neighbourhood safety score (1–5)','Read verified guest reviews'] },
  { Icon:CalendarDays,      title:'Check Availability & Pricing',
    description:'Use the availability calendar to select your check-in and check-out dates. Available dates are green, blocked dates are grey.',
    details:['Minimum stay: 2 nights (most properties)','See full price breakdown before booking','Weekly and monthly rates often discounted'] },
  { Icon:BookOpen,          title:'Book Your Stay (Instant Book or Request)',
    description:'Properties offer either Instant Book (confirmed immediately) or Request to Book (host approves within 24 hours).',
    details:['Instant Book: payment charged immediately, booking confirmed','Request to Book: payment held, confirmed after host accepts','You receive a booking reference number on confirmation'] },
  { Icon:CreditCard,        title:'Provide Guest Details & Pay Securely',
    description:'Enter your guest details, agree to house rules, and pay through Vetandpay escrow. Your funds are protected until check-out inspection.',
    details:['Accepted: bank transfer, card, USSD','Escrow service fee: 5% of booking total','Caution deposit held separately and refunded after check-out'] },
  { Icon:MailCheck,         title:'Receive Confirmation & Pre-Arrival Instructions',
    description:'You\'ll receive a booking confirmation with check-in instructions, property address, emergency contacts, and a QR code for check-in.',
    details:['Confirmation sent via email and SMS','Facility manager contact shared 24 hours before check-in','Property address revealed upon booking confirmation'] },
  { Icon:KeyRound,          title:'Check-In & Enjoy Your Stay',
    description:'Meet the facility manager at check-in. They verify your ID, walk you through the property, and ensure everything matches the listing.',
    details:['Facility manager confirms property condition','QR code scan logs your official check-in time','24/7 guest support available throughout your stay'] },
  { Icon:ClipboardCheck,    title:'Check-Out, Inspection & Deposit Refund',
    description:'At check-out, the facility manager inspects the property. If no damage is found, your caution deposit is refunded within 24 hours.',
    details:['Inspection checklist shared before check-out','Escrow funds released to host after clear inspection','Deposit refund: 24–48 hours via bank transfer'] },
];

const BONUS = [
  { Icon:Calendar,      title:'Sign the Lease Agreement', description:'For yearly rentals, sign a digital lease agreement within the platform. All terms are clearly stated and legally binding.' },
  { Icon:FileSignature, title:'Pay Rent via Escrow',      description:'Annual rent is paid in advance via Vetandpay escrow. Funds are released to the landlord monthly or quarterly as agreed.' },
];

const COMPARE = [
  { label:'Duration',     shortlet:'Daily / Weekly', yearly:'12 months+' },
  { label:'Payment',      shortlet:'Per night / Per week', yearly:'Annual upfront' },
  { label:'Caution dep.', shortlet:'₦20,000–₦100,000', yearly:'1–3 months rent' },
  { label:'Inspection',   shortlet:'Facility Manager', yearly:'Lawyer + Surveyor' },
  { label:'Cancellation', shortlet:'Moderate policy', yearly:'60-day notice' },
  { label:'Escrow',       shortlet:'Yes — per booking', yearly:'Yes — per quarter' },
];

export function ForRentersSection() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom:'2.5rem' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.3rem 0.85rem', borderRadius:'9999px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, marginBottom:'0.85rem' }}>
          <BedDouble size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color }}>For Renters & Short-Let Guests</span>
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.1rem)', color:'var(--text-primary)', letterSpacing:'-0.025em', margin:'0 0 0.6rem', lineHeight:1.15 }}>
          Book with confidence.<br />Every property is inspected by a facility manager.
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.95rem', color:'var(--text-muted)', maxWidth:'540px', lineHeight:1.7, margin:0 }}>
          A step-by-step guide to booking verified short-let and yearly rental properties on Omonile App.
        </p>
      </div>

      {/* Steps — 9 total: col A = 1–5, col B = 6–9 */}
      <div className="hiw-cols" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 3.5rem', marginBottom:'2.5rem' }}>
        <div>{STEPS.slice(0,5).map((s,i) => <StepCard key={i} number={i+1} {...s} {...C} isLast={i===4} />)}</div>
        <div>{STEPS.slice(5).map((s,i) => <StepCard key={i} number={i+6} {...s} {...C} isLast={i===3} />)}</div>
      </div>

      {/* Bonus: Yearly rentals */}
      <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'16px', overflow:'hidden', marginBottom:'2rem' }}>
        <div style={{ padding:'1rem 1.5rem', background:C.colorBg, borderBottom:`1px solid ${C.colorBorder}` }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color, margin:'0 0 0.15rem' }}>Bonus</p>
          <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:0 }}>Yearly Rentals — Extra Steps</h4>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', margin:'0.2rem 0 0' }}>Additional steps for long-term renters</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1px', background:'var(--border-subtle)' }}>
          {BONUS.map((b,i) => (
            <div key={i} style={{ background:'var(--bg-surface)', padding:'1.25rem 1.5rem' }}>
              <div style={{ width:'36px', height:'36px', borderRadius:'9px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'0.75rem' }}>
                <b.Icon size={17} color={C.color} strokeWidth={1.8} />
              </div>
              <h5 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:'0 0 0.35rem' }}>{b.title}</h5>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.6, margin:0 }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'16px', overflow:'hidden', marginBottom:'2rem' }}>
        <div style={{ padding:'1rem 1.5rem', borderBottom:'1px solid var(--border-subtle)' }}>
          <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.95rem', color:'var(--text-primary)', margin:0 }}>Short-Let vs. Yearly Rental — Quick Comparison</h4>
        </div>
        <div style={{ overflowX:'auto' }}>
          <table style={{ width:'100%', borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ background:'var(--bg-surface-2)' }}>
                {['','Short-Let','Yearly Rental'].map(h => (
                  <th key={h} style={{ padding:'0.7rem 1.25rem', textAlign:'left', fontFamily:'var(--font-body)', fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--text-muted)', borderRight:'1px solid var(--border-subtle)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row,i) => (
                <tr key={i} style={{ borderTop:'1px solid var(--border-subtle)' }}>
                  <td style={{ padding:'0.8rem 1.25rem', fontFamily:'var(--font-body)', fontSize:'0.82rem', fontWeight:600, color:'var(--text-secondary)', borderRight:'1px solid var(--border-subtle)' }}>{row.label}</td>
                  <td style={{ padding:'0.8rem 1.25rem', fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-secondary)', borderRight:'1px solid var(--border-subtle)' }}>{row.shortlet}</td>
                  <td style={{ padding:'0.8rem 1.25rem', fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-secondary)' }}>{row.yearly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding:'2rem 2.5rem', background:'linear-gradient(135deg,#0d3d22,#1a6b3c)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.25rem' }}>
        <div>
          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.15rem', color:'#fff', margin:'0 0 0.3rem', letterSpacing:'-0.02em' }}>Ready to book your stay?</h3>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'rgba(255,255,255,0.6)', margin:0 }}>Every property is facility manager verified and escrow protected.</p>
        </div>
        <Link href="/listings?type=short-let" style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.85rem 1.75rem', borderRadius:'9999px', border:'1px solid #e8a84c', background:'#e8a84c', color:'#0d3d22', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.9rem', textDecoration:'none', flexShrink:0 }}>
          Book Your Stay <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

      <style>{`@media(max-width:700px){.hiw-cols{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}