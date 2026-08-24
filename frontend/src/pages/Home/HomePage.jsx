import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { HeroSection } from '../../components/home/HeroSection';
import { StatsSection } from '../../components/home/StatsSection';
import { AboutPreview } from '../../components/home/AboutPreview';
import { FocusAreas } from '../../components/home/FocusAreas';
import { LatestHighlights } from '../../components/home/LatestHighlights';
import { CtaSection } from '../../components/home/CtaSection';

export const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FocusAreas />
      <LatestHighlights />
      <CtaSection />
    </PageContainer>
  );
};
