import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Capys Club
          </h1>
        </div>

        {/* Connect Wallet Button */}
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}
