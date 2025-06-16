import { useState } from 'react'
import './App.css'

function App() {
  const [customProjectId, setCustomProjectId] = useState('')

  const predefinedProjects = [
    { id: 'ABC123', label: 'Open Project ABC123' },
    { id: 'XYZ789', label: 'Open Project XYZ789' },
    { id: 'DEF456', label: 'Open Project DEF456' },
    { id: 'TEST2024', label: 'Open Project TEST2024' }
  ]

  const openDeepLink = (projectId: string) => {
    const deepLink = `toolchecknative://project?projectId=${projectId}`
    window.location.href = deepLink
    
    // Show a message in case the app doesn't open
    setTimeout(() => {
      alert('If the app didn\'t open, make sure it\'s installed on your device.')
    }, 2000)
  }

  const handleCustomDeepLink = () => {
    const projectId = customProjectId.trim()
    if (!projectId) {
      alert('Please enter a project ID')
      return
    }
    openDeepLink(projectId)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCustomDeepLink()
    }
  }

  return (
    <div className="container">
      <h1>🔗 Test Deep Links for Tool Check Native App</h1>
      
      <div className="instructions">
        <h3>📱 Instructions:</h3>
        <ol>
          <li>Make sure your Tool Check Native app is installed on your device</li>
          <li>Open this React app in a mobile browser or access it from your phone</li>
          <li>Click on any of the deep links below</li>
          <li>The app should open and auto-populate the project ID field</li>
        </ol>
      </div>

      <div className="link-section">
        <h3>🚀 Test Deep Links:</h3>
        <p>Click these links to test the deep linking functionality:</p>
        
        <div className="deep-links-container">
          {predefinedProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => openDeepLink(project.id)}
              className="deep-link"
            >
              {project.label}
            </button>
          ))}
        </div>
      </div>

      <div className="link-section">
        <h3>🔧 Custom Project ID:</h3>
        <p>Enter your own project ID:</p>
        <div className="custom-input-container">
          <input
            type="text"
            value={customProjectId}
            onChange={(e) => setCustomProjectId(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter project ID..."
            className="custom-input"
          />
          <button onClick={handleCustomDeepLink} className="custom-button">
            Open Custom Link
          </button>
        </div>
      </div>

      <div className="link-section">
        <h3>📋 Deep Link Format:</h3>
        <p>The deep link format used by this app is:</p>
        <code className="format-code">toolchecknative://project?projectId=YOUR_PROJECT_ID</code>
        
        <h4>Alternative formats (for web integration):</h4>
        <ul className="format-list">
          <li><code>toolchecknative://project?projectId=ABC123</code></li>
          <li><code>toolchecknative:///project?projectId=ABC123</code></li>
        </ul>
      </div>

      <div className="instructions">
        <h3>🌐 For Web Integration:</h3>
        <p>To integrate these deep links in your web application, you can use JavaScript:</p>
        <pre className="code-example">
          <code>{`// JavaScript example
function openProjectInApp(projectId) {
  const deepLink = \`toolchecknative://project?projectId=\${projectId}\`;
  window.location.href = deepLink;
  
  // Fallback to app store if app is not installed
  setTimeout(() => {
    window.location.href = 'https://apps.apple.com/your-app-store-link';
  }, 2000);
}`}</code>
        </pre>
      </div>
    </div>
  )
}

export default App
