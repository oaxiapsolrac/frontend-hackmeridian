'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Admin() {
  const [membershipForm, setMembershipForm] = useState({
    walletAddress: ''
  })

  const [badgeForm, setBadgeForm] = useState({
    walletAddress: '',
    badgeId: ''
  })

  const handleMembershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Issue Membership:', membershipForm)
    // TODO: Implement membership issuance logic
  }

  const handleBadgeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Award Badge:', badgeForm)
    // TODO: Implement badge awarding logic
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Issue New Membership Form */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-white mb-8">
            Issue New Membership
          </h1>
          
          <form onSubmit={handleMembershipSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="membership-wallet" className="block text-sm font-medium text-gray-300">
                Wallet Address
              </label>
              <input
                type="text"
                id="membership-wallet"
                value={membershipForm.walletAddress}
                onChange={(e) => setMembershipForm({ ...membershipForm, walletAddress: e.target.value })}
                placeholder="Enter wallet address..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Issue Membership
            </Button>
          </form>
        </section>

        {/* Award Badge Form */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8">
            Award Badge
          </h2>
          
          <form onSubmit={handleBadgeSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="badge-wallet" className="block text-sm font-medium text-gray-300">
                Wallet Address
              </label>
              <input
                type="text"
                id="badge-wallet"
                value={badgeForm.walletAddress}
                onChange={(e) => setBadgeForm({ ...badgeForm, walletAddress: e.target.value })}
                placeholder="Enter wallet address..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="badge-id" className="block text-sm font-medium text-gray-300">
                Badge ID
              </label>
              <input
                type="text"
                id="badge-id"
                value={badgeForm.badgeId}
                onChange={(e) => setBadgeForm({ ...badgeForm, badgeId: e.target.value })}
                placeholder="Enter badge ID..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Award Badge
            </Button>
          </form>
        </section>

      </div>
    </div>
  )
}
