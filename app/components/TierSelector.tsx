'use client'

type EventType = 'POP_UP' | 'PRIVATE' | 'CORPORATE'
type TierType = 'BASIC' | 'PREMIUM' | 'DELUXE'

interface TierSelectorProps {
  selectedEvent: EventType
  selectedTier: TierType
  onTierChange: (tier: TierType) => void
}

interface TierData {
  [key: string]: {
    [tier: string]: {
      price: number
      description: string
    }
  }
}

export default function TierSelector({ 
  selectedEvent, 
  selectedTier, 
  onTierChange 
}: TierSelectorProps) {
  const tiers: TierData = {
    POP_UP: {
      BASIC: { price: 500, description: '2 hours, 50 guests max' },
      PREMIUM: { price: 750, description: '3 hours, 75 guests + setup' },
      DELUXE: { price: 1000, description: '4 hours, 100 guests + setup + staff' }
    },
    PRIVATE: {
      BASIC: { price: 800, description: '3 hours, 30 guests' },
      PREMIUM: { price: 1200, description: '4 hours, 50 guests + custom menu' },
      DELUXE: { price: 2000, description: 'Full service, 75+ guests' }
    },
    CORPORATE: {
      BASIC: { price: 1500, description: 'Corporate lunch, 50 guests' },
      PREMIUM: { price: 2500, description: 'Corporate event, 100 guests + branding' },
      DELUXE: { price: 4000, description: 'Full corporate gala, 150+ guests' }
    }
  }

  const tierOptions: { value: TierType; label: string }[] = [
    { value: 'BASIC', label: 'Basic' },
    { value: 'PREMIUM', label: 'Premium' },
    { value: 'DELUXE', label: 'Deluxe' }
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">2. Choose Your Package</h2>
      <div className="grid grid-cols-3 gap-4">
        {tierOptions.map((tier) => (
          <button
            key={tier.value}
            onClick={() => onTierChange(tier.value)}
            className={`p-4 border rounded-lg text-left transition ${
              selectedTier === tier.value 
                ? 'border-orange-600 bg-orange-50' 
                : 'hover:border-gray-400'
            }`}
          >
            <h3 className="font-bold">{tier.label}</h3>
            <p className="text-sm text-gray-600">
              {tiers[selectedEvent][tier.value].description}
            </p>
            <p className="text-lg font-bold text-orange-600 mt-2">
              ${tiers[selectedEvent][tier.value].price}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}