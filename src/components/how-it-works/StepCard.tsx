import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  details?: string[];
  color: string;
  colorBg: string;
  colorBorder: string;
  isLast?: boolean;
}

export function StepCard({ number, title, description, Icon, details, color, colorBg, colorBorder, isLast }: StepCardProps) {
  return (
    <div style={{ display:'flex', gap:'1.1rem' }}>
      {/* Number column + connector */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
        <div style={{
          width:'46px', height:'46px', borderRadius:'50%',
          background: colorBg,
          border:`2px solid ${colorBorder}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:`0 4px 14px ${color}1a`,
          flexShrink:0, position:'relative', zIndex:1,
        }}>
          <Icon size={20} color={color} strokeWidth={1.8} />
        </div>
        {!isLast && (
          <div style={{ width:'2px', flex:1, minHeight:'28px', background:`linear-gradient(to bottom, ${colorBorder}, transparent)`, margin:'3px 0' }} />
        )}
      </div>

      {/* Content */}
      <div style={{ flex:1, paddingBottom: isLast ? '0' : '2rem' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color, display:'block', marginBottom:'0.25rem' }}>
          Step {String(number).padStart(2,'0')}
        </span>
        <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(0.92rem,1.6vw,1.05rem)', color:'var(--text-primary)', letterSpacing:'-0.015em', margin:'0 0 0.45rem', lineHeight:1.25 }}>
          {title}
        </h3>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.65, margin:'0 0 0.65rem' }}>
          {description}
        </p>
        {details && details.length > 0 && (
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.35rem' }}>
            {details.map((d,i) => (
              <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'7px' }}>
                <span style={{ width:'16px', height:'16px', borderRadius:'50%', background:colorBg, border:`1.5px solid ${colorBorder}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'2px' }}>
                  <svg width="7" height="7" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'0.83rem', color:'var(--text-secondary)', lineHeight:1.5 }}>{d}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}