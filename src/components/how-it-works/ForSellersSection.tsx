import Link from 'next/link';
import { UserPlus, LayoutGrid, FormInput, ShieldCheck, Users, BadgeCheck, MessageSquare, Banknote, ArrowRight, Calendar, DollarSign, ClipboardCheck, Building2 } from 'lucide-react';
import { StepCard } from './StepCard';

const C = { color:'#b8832a', colorBg:'rgba(232,168,76,0.09)', colorBorder:'rgba(232,168,76,0.28)' };

const STEPS = [
  { Icon:UserPlus,      title:'Create Your Account & Profile',
    description:'Sign up and build your seller profile. Verify your identity with your NIN/BVN and upload your business documents if selling as an agent or company.',
    details:['Individual sellers: NIN verification','Agents & companies: CAC registration required','Profile completeness boosts listing visibility'] },
  { Icon:LayoutGrid,    title:'Choose Your Listing Type',
    description:'Select what you\'re listing: Land for Sale, Property for Sale, Short-Let Rental, or Yearly Rental. Each type has a tailored listing form.',
    details:['Land for sale — title documents required','Property for sale — survey plan required','Short-let / yearly rental — no verification required to list, but verified listings get priority'] },
  { Icon:FormInput,     title:'Create Your Listing (Step-by-Step Form)',
    description:'Fill in property details, upload photos, set your price, and add a description. Our step-by-step form guides you through every field.',
    details:['Upload 6–12 high-quality photos','Set asking price and negotiation preference','Save as draft and come back anytime'] },
  { Icon:ShieldCheck,   title:'Submit for Verification',
    description:'Upload your title documents, survey plan, and consent letters. Our system begins the 6-layer verification process immediately.',
    details:['Required: Certificate of Occupancy (C of O), Deed of Assignment, or Registered Survey Plan','Family consent letter if applicable','Verification fee: ₦50,000 paid by you or the buyer'] },
  { Icon:Users,         title:'Cooperate with Assigned Professionals',
    description:'A lawyer and surveyor are assigned to your property. Cooperate fully — share access, answer queries, and provide additional documents when requested.',
    details:['Lawyer conducts state and federal registry search','Surveyor visits for physical inspection','Community leader engaged for dispute check','Timeline: 7–10 working days'] },
  { Icon:BadgeCheck,    title:'Get Verified & Go Live',
    description:'Once all 6 layers pass, your listing gets the Omonile "Verified" badge and goes live to thousands of buyers and renters.',
    details:['Verified badge builds buyer trust instantly','Listing featured in "Verified Properties" section','Receive your Omonile Verification Certificate'] },
  { Icon:MessageSquare, title:'Receive Offers & Negotiate',
    description:'Buyers and renters send offers directly through the platform. Negotiate via secure in-app messaging without sharing your personal contact.',
    details:['Accept, decline, or counter-offer in one click','Get notified instantly for each offer received','Set a minimum offer threshold to filter low bids'] },
  { Icon:Banknote,      title:'Complete Transaction & Get Paid',
    description:'Once an offer is accepted, the buyer funds the escrow. After the transaction conditions are met, payment is released directly to your bank account.',
    details:['Escrow protects both buyer and seller','Service commission: 3% of final sale price','Payment to your account within 2 working days of completion'] },
];

const BONUS = [
  { Icon:Calendar,       title:'Set Availability Calendar',    description:'Mark your short-let or rental as available or blocked. Sync with your booking schedule to prevent double-bookings.' },
  { Icon:DollarSign,     title:'Set Pricing & Policies',       description:'Define nightly, weekly, and monthly rates. Set house rules, check-in times, cancellation policy, and minimum stay.' },
  { Icon:ClipboardCheck, title:'Assign a Facility Manager',    description:'Connect a certified Omonile facility manager to handle check-ins, cleaning, and guest support on your behalf.' },
];

const FEES = [
  { item:'Listing (unverified)',     fee:'Free' },
  { item:'Verification fee',         fee:'₦50,000' },
  { item:'Sale commission',          fee:'3% of sale price' },
  { item:'Short-let platform fee',   fee:'10% per booking' },
  { item:'Yearly rental commission', fee:'5% of annual rent' },
];

export function ForSellersSection() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom:'2.5rem' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.3rem 0.85rem', borderRadius:'9999px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, marginBottom:'0.85rem' }}>
          <Building2 size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color }}>For Sellers & Property Owners</span>
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.1rem)', color:'var(--text-primary)', letterSpacing:'-0.025em', margin:'0 0 0.6rem', lineHeight:1.15 }}>
          List your property. Get verified.<br />Attract serious buyers and renters.
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.95rem', color:'var(--text-muted)', maxWidth:'540px', lineHeight:1.7, margin:0 }}>
          A complete step-by-step guide to selling land or property safely on Omonile App.
        </p>
      </div>

      {/* Steps */}
      <div className="hiw-cols" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 3.5rem', marginBottom:'2.5rem' }}>
        <div>{STEPS.slice(0,4).map((s,i) => <StepCard key={i} number={i+1} {...s} {...C} isLast={i===3} />)}</div>
        <div>{STEPS.slice(4).map((s,i) => <StepCard key={i} number={i+5} {...s} {...C} isLast={i===3} />)}</div>
      </div>

      {/* Bonus: Rental owners */}
      <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'16px', overflow:'hidden', marginBottom:'2rem' }}>
        <div style={{ padding:'1rem 1.5rem', background:C.colorBg, borderBottom:`1px solid ${C.colorBorder}` }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color, margin:'0 0 0.15rem' }}>Bonus</p>
          <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:0 }}>For Rental & Short-Let Owners</h4>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', margin:'0.2rem 0 0' }}>Additional steps for property owners listing rentals or short-lets</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1px', background:'var(--border-subtle)' }}>
          {BONUS.map((b,i) => (
            <div key={i} style={{ background:'var(--bg-surface)', padding:'1.25rem 1.5rem' }}>
              <div style={{ width:'36px', height:'36px', borderRadius:'9px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'0.75rem' }}>
                <b.Icon size={17} color={C.color} strokeWidth={1.8} />
              </div>
              <h5 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:'0 0 0.35rem', letterSpacing:'-0.01em' }}>{b.title}</h5>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.6, margin:0 }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fees table */}
      <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'16px', overflow:'hidden', marginBottom:'2rem' }}>
        <div style={{ padding:'1rem 1.5rem', borderBottom:'1px solid var(--border-subtle)' }}>
          <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.95rem', color:'var(--text-primary)', margin:0 }}>Seller Fees & Commission Structure</h4>
        </div>
        {FEES.map((f,i) => (
          <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.85rem 1.5rem', borderTop: i>0 ? '1px solid var(--border-subtle)' : 'none' }}>
            <span style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'var(--text-secondary)' }}>{f.item}</span>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:C.color }}>{f.fee}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding:'2rem 2.5rem', background:`linear-gradient(135deg, #7a5520, ${C.color})`, borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.25rem' }}>
        <div>
          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.15rem', color:'#fff', margin:'0 0 0.3rem', letterSpacing:'-0.02em' }}>Ready to list your property?</h3>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'rgba(255,255,255,0.65)', margin:0 }}>Get verified and reach thousands of serious buyers.</p>
        </div>
        <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
          <Link href="/listings/sale/new" style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.8rem 1.5rem', borderRadius:'9999px', border:'1px solid #fff', background:'#fff', color:'#0d3d22', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.875rem', textDecoration:'none' }}>
            List for Sale <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <Link href="/listings/rental/new" style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.8rem 1.5rem', borderRadius:'9999px', border:'1px solid rgba(255,255,255,0.45)', background:'transparent', color:'#fff', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.875rem', textDecoration:'none' }}>
            List Short-Let <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      <style>{`@media(max-width:700px){.hiw-cols{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}