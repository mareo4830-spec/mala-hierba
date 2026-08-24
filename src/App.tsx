import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import MenuPreview from '@/components/MenuPreview';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import NfcButton from '@/components/NfcButton';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-neutral-200">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <MenuPreview />
        <Reviews />
        <Location />
      </main>
      <NfcButton />
    </div>
  );
}

export default App;
