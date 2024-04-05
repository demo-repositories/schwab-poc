import { MousePointer } from 'lucide-react'
export default function DynamicCTAIcon() {
    return (
        <div
            style={{
                border: '2px solid white',
                fontSize: '8px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '7px',
            }}
        >
            <MousePointer style={{ scale: '0.5', margin: 0 }} />
        </div>
    )
}
