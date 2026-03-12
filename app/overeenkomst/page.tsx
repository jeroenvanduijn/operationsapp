import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dienstverleningsovereenkomst — GymOps',
  description:
    'Teken de GymOps dienstverleningsovereenkomst om te starten met jouw gym automatisering.',
};

export default function OvereenkomstPage() {
  return (
    <div className="min-h-screen pt-20">
      <iframe
        title="GymOps Dienstverleningsovereenkomst"
        src="https://eu.jotform.com/sign/260706020795051/invite/01kkhswqqz373458b4f30109bd?signEmbed=1"
        style={{ height: 'calc(100vh - 80px)', width: '100%', border: 0 }}
        className="bg-white"
      />
    </div>
  );
}
