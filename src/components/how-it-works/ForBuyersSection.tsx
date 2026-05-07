import Link from 'next/link';
import { Search, FileSearch, ShieldCheck, Clock4, BadgeCheck, Handshake, Wallet, FolderLock, ArrowRight, Home } from 'lucide-react';
import { StepCard } from './StepCard';

const C = { color:'#1a6b3c', colorBg:'rgba(26,107,60,0.08)', colorBorder:'rgba(26,107,60,0.22)' };

const STEPS = [
  { Icon:Search,      title:'Search for Properties',
    description:'Browse thousands of verified listings across Lagos and Nigeria. Filter by location, price, type, and verification status.',
    details:['Use LGA filter to target your preferred area','Toggle "Verified Only" to see fully verified listings','Save searches and get alerts for new matches'] },
  { Icon:FileSearch,  title:'Review Property Details',
    description:'Every listing shows full photos, address, size, amenities, seller profile, and a complete 6-layer verification report.',
    details:['View AI forgery score and lawyer registry result','Check surveyor inspection coordinates','Download blockchain certificate for tamper-proof records'] },
  { Icon:ShieldCheck, title:'Request Verification (If Not Yet Verified)',
    description:'If a property isn\'t verified, request it for ₦50,000. Our team assigns a lawyer and surveyor within 24 hours.',
    details:['Verification fee: ₦50,000 (refundable if fraud detected)','Timeline: 7–10 working days','SMS and email updates at every stage'] },
  { Icon:Clock4,      title:'Track Verification Progress',
    description:'Your dashboard shows real-time progress across all 6 verification layers with live status updates.',
    details:['Layer 1: AI Forgery Detection','Layer 2 & 3: Lawyer state + federal registry search','Layer 4: Family land consent','Layer 5: Surveyor physical inspection','Layer 6: Community engagement'] },
  { Icon:BadgeCheck,  title:'Receive Verification Certificate',
    description:'Once verified, you receive a digital Omonile Verification Certificate with QR code and blockchain transaction hash.',
    details:['Download PDF certificate','Share link with your legal team','Verify authenticity anytime via QR scan'] },
  { Icon:Handshake,   title:'Make an Offer',
    description:'Click "Make Offer" to submit your price. The seller is notified instantly and can accept, counter, or decline.',
    details:['Negotiate securely via in-app messaging','Set an offer expiry date','Attach pre-approval letter if needed'] },
  { Icon:Wallet,      title:'Fund Escrow — Payment Protection',
    description:'Once an offer is accepted, fund the escrow account via Vetandpay. Your money is held securely and never paid directly to the seller.',
    details:['Accepted: Bank transfer, USSD, card','Escrow service fee: 1.5% of property price','Funds released only after title transfer is confirmed'] },
  { Icon:FolderLock,  title:'Complete Transaction & Store Documents',
    description:'All signed documents are stored securely in your Omonile dashboard — encrypted, blockchain-backed, accessible anytime.',
    details:['Receive digital copies of all documents','Title deed recorded on blockchain','Share access with your lawyer anytime'] },
];

const SUMMARY_CHIPS = ['01 Search','02 Review','03 Verify','04 Track','05 Certificate','06 Offer','07 Escrow','08 Complete'];

export function ForBuyersSection() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom:'2.5rem' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.3rem 0.85rem', borderRadius:'9999px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, marginBottom:'0.85rem' }}>
          <Home size={13} color={C.color} strokeWidth={2.2} />
          <span style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:C.color }}>For Land & Property Buyers</span>
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.1rem)', color:'var(--text-primary)', letterSpacing:'-0.025em', margin:'0 0 0.6rem', lineHeight:1.15 }}>
          Buy with confidence.<br />Never fall victim to land fraud again.
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.95rem', color:'var(--text-muted)', maxWidth:'540px', lineHeight:1.7, margin:0 }}>
          A complete step-by-step guide to buying land or property safely on Omonile App.
        </p>
      </div>

      {/* Progress chips */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem', alignItems:'center', padding:'1rem 1.25rem', background:'var(--bg-surface)', border:'1px solid var(--border-subtle)', borderRadius:'12px', marginBottom:'2.5rem' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'var(--text-muted)', marginRight:'0.25rem' }}>8 steps:</span>
        {SUMMARY_CHIPS.map((chip,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:'4px' }}>
            <span style={{ padding:'0.2rem 0.6rem', borderRadius:'9999px', background:C.colorBg, border:`1px solid ${C.colorBorder}`, fontFamily:'var(--font-body)', fontSize:'0.7rem', fontWeight:700, color:C.color }}>{chip}</span>
            {i < SUMMARY_CHIPS.length-1 && <span style={{ color:'var(--border-strong)', fontSize:'0.65rem' }}>›</span>}
          </div>
        ))}
      </div>

      {/* 2-column steps */}
      <div className="hiw-cols" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 3.5rem' }}>
        <div>
          {STEPS.slice(0,4).map((s,i) => <StepCard key={i} number={i+1} {...s} {...C} isLast={i===3} />)}
        </div>
        <div>
          {STEPS.slice(4).map((s,i) => <StepCard key={i} number={i+5} {...s} {...C} isLast={i===3} />)}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ marginTop:'2.5rem', padding:'2rem 2.5rem', background:'linear-gradient(135deg,#0d3d22,#1a6b3c)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.25rem' }}>
        <div>
          <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.15rem', color:'#fff', margin:'0 0 0.3rem', letterSpacing:'-0.02em' }}>Ready to find your perfect property?</h3>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'rgba(255,255,255,0.6)', margin:0 }}>Browse thousands of verified listings across Nigeria.</p>
        </div>
        <Link href="/listings" style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'0.85rem 1.75rem', borderRadius:'9999px', border:'1px solid #e8a84c', background:'#e8a84c', color:'#0d3d22', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.9rem', textDecoration:'none', flexShrink:0, boxShadow:'0 4px 16px rgba(232,168,76,0.35)' }}>
          Start Searching <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

      <style>{`.hiw-cols{@media(max-width:700px){grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}