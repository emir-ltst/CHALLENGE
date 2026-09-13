import { Calculator, X } from 'lucide-react'
import { useState } from 'react'
import Claculate from './Claculate'

export default function CalculatorTool() {
  const [isOpen, setIsOpen] = useState(false)

  return <section className={`page-calculator-tool ${isOpen ? 'is-open' : ''}`}>
    <button className="page-calculator-toggle" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}>
      <Calculator size={19} />
      <span>{isOpen ? 'Close quick calculator' : 'Open quick calculator'}</span>
      {isOpen ? <X size={16} /> : <span className="tool-status">READY</span>}
    </button>
    {isOpen && <div className="page-calculator-panel"><div><p className="eyebrow">UTILITY MODULE / 03</p><h2>Calculate before you commit.</h2><p>Run a quick total while you compare products.</p></div><Claculate /></div>}
  </section>
}
