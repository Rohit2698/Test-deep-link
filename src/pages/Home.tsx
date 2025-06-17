export default function Home() {

  const openDeepLink = () => {
    const deepLink = "toolchecknative://project"

    const timeout = setTimeout(() => {
      alert(
        "App not found. Please make sure the ToolCheck mobile app is installed.",
      )
    }, 2000)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeout)
        document.removeEventListener("visibilitychange", handleVisibilityChange)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Try to open the deep link
    window.location.href = deepLink
  }


  return (
    <div className="container">
      <h1>🔗 Test Deep Links for Tool Check Native App</h1>

      <div className="link-section">
        <h3>🚀 Test Deep Links:</h3>
        <p>Click these links to test the deep linking functionality:</p>
        
        <div className="deep-links-container">
          <button
              onClick={() => openDeepLink()}
              className="deep-link"
            >
              Open App
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
