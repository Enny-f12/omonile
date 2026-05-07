import { ListingDetailClient } from '@/components/listings/ListingDetailClient';

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      
      <main style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: '68px' }}>
        <ListingDetailClient id={params.id} />
      </main>
      
    </>
  );
}