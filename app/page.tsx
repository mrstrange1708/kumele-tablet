import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RewardRings from '@/components/RewardRings';
import MoneyEarnedChart from '@/components/MoneyEarnedChart';

export default function Home() {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-[#F5F5F5]">
            {/* Top Header Bar */}
            <Header />

            {/* Main Layout: Sidebar + Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 overflow-auto p-6">
                    {/* White Container Card for all content */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 min-h-full">
                        {/* Page Title */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-8">
                            History & Statistics
                        </h2>

                        {/* Charts Section - Two columns */}
                        <div className="flex gap-16 items-start">
                            <RewardRings />
                            <MoneyEarnedChart />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
