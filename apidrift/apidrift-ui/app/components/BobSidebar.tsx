'use client';

interface BobSidebarProps {
  currentScreen: number;
  totalScreens: number;
}

export default function BobSidebar({ currentScreen, totalScreens }: BobSidebarProps) {
  return (
    <div className="w-64 bg-blue-900 text-white p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">APIDrift</h1>
        <p className="text-blue-200 text-sm">Powered by IBM Bob</p>
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold mb-4 text-blue-200">Bob's Capabilities Used:</h3>
        <ul className="space-y-3 text-sm">
          <li className={currentScreen >= 1 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 1 ? '✓' : '○'} Repo context analysis
          </li>
          <li className={currentScreen >= 2 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 2 ? '✓' : '○'} Contract comparison
          </li>
          <li className={currentScreen >= 3 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 3 ? '✓' : '○'} Evidence trail generation
          </li>
          <li className={currentScreen >= 4 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 4 ? '✓' : '○'} Severity classification
          </li>
          <li className={currentScreen >= 5 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 5 ? '✓' : '○'} Fix strategy reasoning
          </li>
          <li className={currentScreen >= 6 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 6 ? '✓' : '○'} Patch generation
          </li>
          <li className={currentScreen >= 7 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 7 ? '✓' : '○'} Contract test creation
          </li>
          <li className={currentScreen >= 8 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 8 ? '✓' : '○'} Ticket routing
          </li>
          <li className={currentScreen >= 9 ? 'text-white' : 'text-blue-400'}>
            {currentScreen >= 9 ? '✓' : '○'} PR summary generation
          </li>
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-blue-700">
        <p className="text-xs text-blue-300">
          IBM Bob analyzes your entire codebase to detect and fix API contract drift automatically.
        </p>
      </div>
    </div>
  );
}

// Made with Bob
