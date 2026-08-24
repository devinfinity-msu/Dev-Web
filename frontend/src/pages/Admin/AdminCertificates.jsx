import React from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { CertificateGeneratorMock } from '../../components/admin/CertificateGeneratorMock';

export const AdminCertificates = () => {
  return (
    <div>
      <AdminActionHeader
        title="Certificate Management & Generation Engine"
        subtitle="Frontend UI layout for generating, verifying, and bulk-dispatching event participation certificates."
      />

      <CertificateGeneratorMock />
    </div>
  );
};
