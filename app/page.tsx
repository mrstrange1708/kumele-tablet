import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RewardRings from '@/components/RewardRings';
import MoneyEarnedChart from '@/components/MoneyEarnedChart';

export default function Home() {
    return (
        <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area with exact padding */}
            <main className="flex-1 p-12 overflow-auto" style={{ backgroundColor: '#F7F5F2' }}>
                <div className="max-w-6xl mx-auto">
                    {/* White Content Card */}
                    <div className="bg-white rounded-[24px] shadow-sm px-10 py-8">
                        <Header />

                        {/* History & Statistics Title */}
                        <h2 className="text-base font-semibold text-gray-900 mb-8 mt-4">
                            History & Statistics
                        </h2>

                        {/* Charts Section - Two columns */}
                        <div className="flex gap-16 items-start">
                            <RewardRings />
                            <MoneyEarnedChart />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
