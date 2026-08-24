import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ContactInfo } from '../../components/contact/ContactInfo';
import { ContactForm } from '../../components/contact/ContactForm';

export const ContactPage = () => {
  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Build Something"
          gradientText="Together."
          description="Have questions about club membership, upcoming workshops, project collaborations, or event sponsorships? Reach out to us."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          margin: '2rem 0 5rem 0'
        }}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
};
