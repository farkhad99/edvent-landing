'use client';

import { LearningTracks } from '@/components/program/LearningTracks';
import { ProgramForm } from '@/components/program/ProgramForm';
import { ProgramHeader } from '@/components/program/ProgramHeader';

export default function AdminPage() {
  return (
    <>
      <ProgramHeader isAdmin />
      <LearningTracks isAdmin />
      <ProgramForm />
    </>
  );
}
