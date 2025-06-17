import { useParams } from 'react-router-dom'

export default function InspectionForm() {
  const { toolId, inspectionId } = useParams()
  

  
  return (
    <div className="container">
      <h1>📋 Inspection Form</h1>
      <div className="info-section">
        <h3>ℹ️ Inspection Details</h3>
        <div className="info-grid">
          <div className="info-item">
            <strong>Tool ID:</strong> <span className="info-value">{toolId}</span>
          </div>
          <div className="info-item">
            <strong>Inspection ID:</strong> <span className="info-value">{inspectionId}</span>
          </div>
          <div className="info-item">
            <strong>Route:</strong> <span className="info-value">/tool/{toolId}/inspection/{inspectionId}/inspectionform</span>
          </div>
        </div>
      </div>


      <div className="deep-link-section">
        <h3>🔗 Deep Link Integration</h3>
        <p>This page can be accessed via deep link with the following format:</p>
        <code className="format-code">
          toolchecknative://tool/{toolId}/inspection/{inspectionId}/inspectionform
        </code>
        <p className="deep-link-info">
          When users click deep links in the native app, they will be directed to this specific inspection form
          with the tool ID and inspection ID pre-populated.
        </p>
      </div>
    </div>
  )
}
