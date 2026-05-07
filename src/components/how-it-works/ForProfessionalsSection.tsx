import Link from 'next/link';
import { Scale, Ruler, Wrench, Crown, ClipboardList, ShieldCheck, UserCog, CreditCard, Inbox, FileCheck, Banknote, Home, Star, ArrowRight, Briefcase } from 'lucide-react';
import { StepCard } from './StepCard';

const C = { color:'#7c3aed', colorBg:'rgba(124,58,237,0.08)', colorBorder:'rgba(124,58,237,0.22)' };
const Cg= { color:'#1a6b3c', colorBg:'rgba(26,107,60,0.08)', colorBorder:'rgba(26,107,60,0.22)' };

const ROLES = [
  { Icon:Scale,  label:'Lawyer',           desc:'Title searches, document verification, state & federal registry checks.',  pay:'₦15,000–₦80,000 per case' },
  { Icon:Ruler,  label:'Surveyor',         desc:'Physical property inspection, GPS-tagged reports, coordinate confirmation.',pay:'₦20,000–₦60,000 per inspection' },
  { Icon:Wrench, label:'Facility Manager', desc:'Property check-ins, inspections, guest management, cleaning coordination.',  pay:'Commission per booking + monthly retainer' },
  { Icon:Crown,  label:'Community Leader', desc:'Community dispute verification and land ownership engagement.',               pay:'₦5,000–₦15,000 per engagement' },
];

const STEPS = [
  { Icon:ClipboardList, title:'Choose Your Professional Role',
    description:'Select whether you\'re applying as a Lawyer, Surveyor, Facility Manager, or Community Leader. Each role has specific requirements and earning potential.',
    details:['Lawyers: must be licensed by the NBA','Surveyors: must be registered with SURCON','Facility managers: training provided by Omonile','Community leaders: must have verifiable community standing'] },
  { Icon:FileCheck,     title:'Submit Your Application',
    description:'Complete the online application form. Upload your credentials, professional license, government ID, and a short bio.',
    details:['Form takes approximately 15–20 minutes','Upload: professional license, NIN, bank details','References required for lawyers and surveyors'] },
  { Icon:ShieldCheck,   title:'Complete Vetting & Verification',
    description:'Our team reviews your application and conducts a background check. You may be contacted for a short virtual interview.',
    details:['Background check conducted within 3 working days','Virtual interview for lawyers and surveyors','Identity verified against NIN/BVN database'] },
  { Icon:UserCog,       title:'Set Up Your Professional Profile',
    description:'Once approved, build your profile with your photo, bio, areas of coverage, and specialisations to attract more job requests.',
    details:['Set your operating LGAs and coverage area','List your specialisations and years of experience','Higher profile completeness = more job assignments'] },
  { Icon:CreditCard,    title:'Choose Your Subscription Plan',
    description:'Select a subscription plan that matches your workload capacity. Higher plans give access to more job requests and premium listings.',
    details:['Free plan: up to 3 jobs/month','Standard: ₦5,000/month — up to 15 jobs','Premium: ₦12,000/month — unlimited jobs + priority assignment'] },
  { Icon:Inbox,         title:'Receive & Accept Job Requests',
    description:'When a property in your coverage area needs your service, you receive an instant notification. Review the details and accept or decline.',
    details:['Accept within 2 hours to avoid reassignment','View property location, type, and estimated pay before accepting','Decline without penalty up to 3 times per month'] },
  { Icon:Wrench,        title:'Complete the Job & Submit Report',
    description:'Carry out your professional duties — inspection, registry search, or community engagement — and submit your digital report within the required timeline.',
    details:['Lawyers: 5 working days for title search','Surveyors: 2 working days after inspection','Facility managers: same-day report after check-in/check-out','All reports include GPS data, photos, and digital signature'] },
  { Icon:Banknote,      title:'Get Paid & Build Your Reputation',
    description:'Payment is released to your bank account within 48 hours of report approval. Clients rate your service, building your reputation on the platform.',
    details:['Direct bank transfer — no delays','Ratings from clients boost your profile visibility','Top-rated professionals get priority job assignments','Earn the "Elite Professional" badge at 4.8+ rating'] },
];

const BONUS = [
  { Icon:Home, title:'Premium Property Management',
    description:'Facility managers can apply to manage entire properties — handling all bookings, cleaning, check-ins, maintenance, and guest communication for a monthly retainer.' },
  { Icon:Star, title:'Earn the Elite Badge',
    description:'Complete 50+ jobs with a 4.8+ rating to earn the Omonile Elite Professional badge — displayed on your profile and prioritised in all job assignments.' },
];

const FEES = [
  { role:'Lawyer',           fee:'15% platform fee per case' },
  { role:'Surveyor',         fee:'15% platform fee per inspection' },
  { role:'Facility Manager', fee:'10% platform fee per booking managed' },
  { role:'Community Leader', fee:'10% platform fee per engagement' },
];

const REQUIREMENTS = [
  { role:'Lawyer',           reqs:'NBA licence, 2+ years experience, Lagos bar membership preferred' },
  { role:'Surveyor',         reqs:'SURCON registration, GPS equipment, inspection vehicle' },
  { role:'Facility Manager', reqs:'Clean record, smartphone with internet, Omonile training completion' },
  { role:'Community Leader', reqs:'Verifiable community position, two references, government ID' },
];

export function ForProfessionalsSection() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom:'2.5rem' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.3rem 0.85rem', borderRadius:'9999px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, marginBottom:'0.85rem' }}>
          <Briefcase size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color }}>For Professionals</span>
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.1rem)', color:'var(--text-primary)', letterSpacing:'-0.025em', margin:'0 0 0.6rem', lineHeight:1.15 }}>
          Join, verify, and earn.<br />Grow your professional practice with Omonile.
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.95rem', color:'var(--text-muted)', maxWidth:'540px', lineHeight:1.7, margin:0 }}>
          A step-by-step guide for lawyers, surveyors, facility managers, and community leaders to join and earn on Omonile App.
        </p>
      </div>

      {/* Role cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'0.75rem', marginBottom:'2.5rem' }}>
        {ROLES.map((r,i) => (
          <div key={i} style={{ background:'var(--bg-surface)', border:`1px solid ${C.colorBorder}`, borderRadius:'14px', padding:'1.25rem' }}>
            <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'0.85rem' }}>
              <r.Icon size={19} color={C.color} strokeWidth={1.8} />
            </div>
            <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.92rem', color:'var(--text-primary)', margin:'0 0 0.35rem', letterSpacing:'-0.01em' }}>{r.label}</h4>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'var(--text-muted)', lineHeight:1.55, margin:'0 0 0.6rem' }}>{r.desc}</p>
            <span style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', fontWeight:700, color:C.color }}>{r.pay}</span>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="hiw-cols" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 3.5rem', marginBottom:'2.5rem' }}>
        <div>{STEPS.slice(0,4).map((s,i) => <StepCard key={i} number={i+1} {...s} {...C} isLast={i===3} />)}</div>
        <div>{STEPS.slice(4).map((s,i) => <StepCard key={i} number={i+5} {...s} {...C} isLast={i===3} />)}</div>
      </div>

      {/* Bonus */}
      <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'16px', overflow:'hidden', marginBottom:'2rem' }}>
        <div style={{ padding:'1rem 1.5rem', background:C.colorBg, borderBottom:`1px solid ${C.colorBorder}` }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color, margin:'0 0 0.15rem' }}>Bonus</p>
          <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--text-primary)', margin:0 }}>Facility Manager Premium Management</h4>
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

      {/* Fees + Requirements */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'2rem' }} className="hiw-tables">
        {/* Fees */}
        <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'14px', overflow:'hidden' }}>
          <div style={{ padding:'0.9rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' }}>
            <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:0 }}>Platform Fees</h4>
          </div>
          {FEES.map((f,i) => (
            <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'0.75rem 1.25rem', borderTop: i>0?'1px solid var(--border-subtle)':'none' }}>
              <span style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-secondary)' }}>{f.role}</span>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.82rem', color:C.color }}>{f.fee}</span>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div style={{ background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'14px', overflow:'hidden' }}>
          <div style={{ padding:'0.9rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' }}>
            <h4 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'var(--text-primary)', margin:0 }}>Requirements</h4>
          </div>
          {REQUIREMENTS.map((r,i) => (
            <div key={i} style={{ padding:'0.75rem 1.25rem', borderTop: i>0?'1px solid var(--border-subtle)':'none' }}>
              <p style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.8rem', color:C.color, margin:'0 0 0.2rem' }}>{r.role}</p>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.78rem', color:'var(--text-muted)', margin:0, lineHeight:1.5 }}>{r.reqs}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding:'2rem 2.5rem', background:`linear-gradient(135deg, #3b1a7a, ${C.color})`, borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.25rem' }}>
        <div>
          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.15rem', color:'#fff', margin:'0 0 0.3rem', letterSpacing:'-0.02em' }}>Ready to grow your professional practice?</h3>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'rgba(255,255,255,0.65)', margin:0 }}>Join Nigeria&apos;s fastest-growing property verification network.</p>
        </div>
        <Link href="/professionals/apply" style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.85rem 1.75rem', borderRadius:'9999px', border:'1px solid #fff', background:'#fff', color:'#3b1a7a', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.9rem', textDecoration:'none', flexShrink:0 }}>
          Apply Now <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

      <style>{`
        @media(max-width:700px){.hiw-cols,.hiw-tables{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}