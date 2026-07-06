'use client'

type EventType = 'POP_UP' | 'PRIVATE' | 'CORPORATE'

interface EventTypeSelectorProps {
  selectedEvent: EventType
  onEventChange: (eventType: EventType) => void
}

export default function EventTypeSelector({ 
  selectedEvent, 
  onEventChange 
}: EventTypeSelectorProps) {
  const eventTypes: { value: EventType; label: string }[] = [
    { value: 'POP_UP', label: 'Pop-Up Event' },
    { value: 'PRIVATE', label: 'Private Party' },
    { value: 'CORPORATE', label: 'Corporate Event' }
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">1. Select Event Type</h2>
      <div className="grid grid-cols-3 gap-4">
        {eventTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => onEventChange(type.value)}
            className={`p-4 border rounded-lg transition ${
              selectedEvent === type.value 
                ? 'border-orange-600 bg-orange-50' 
                : 'hover:border-gray-400'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  )
}