
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { NeighborhoodSafety } from '@/components/home/NeighbourhoodSafety';
import { PropertyTypes } from '@/components/home/PropertyTypes';
import { SearchSection } from '@/components/home/SearchSection';
import { ForBuyers, ForRenters, ForSellers  } from '@/components/home/Audiencesections';
import { ProfessionalNetwork } from '@/components/home/ProfessionalNetwork';
import { ActivityFeed } from '@/components/home/ActivityFeed';
import { Testimonials } from '@/components/home/Testimonials';
import { ReferralProgram } from '@/components/home/ReferralProgram';
import { FAQ } from '@/components/home/FAQ';
//import { MarketInsights } from '@/components/home/MarketInsights';

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <SearchSection/>
        <FeaturedProperties/>
        <PropertyTypes/>
        <NeighborhoodSafety/>
        <HowItWorks/>
        <ForBuyers/>
        <ForRenters/>
        <ForSellers/>
        <ProfessionalNetwork/>
        <ActivityFeed/>
        <Testimonials/>
        <ReferralProgram/>
        <FAQ/>
      </main>
      
    </>
  );
}