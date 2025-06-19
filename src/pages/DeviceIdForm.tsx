import { useEffect, useState } from "react";

const DeviceIdForm = () => {
    const [deviceId, setDeviceId] = useState<string>("");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("deviceId");
        setDeviceId(id ||"");
        
    }, []);
    
  return (
    <div className="container">
      <h1>Device ID Form</h1>
      <div className="info-section">
        <div className="info-grid">
          <div className="info-item">
            <strong>Device ID:</strong> <span className="info-value">{deviceId}</span>
          </div>
        </div>
      </div>
      <h3>ℹ️ Device Details</h3>
        
        <div className="deep-link-section">
        <h3>🔗 Deep Link Integration</h3>
        <p>This page can be accessed via deep link with the following format:</p>
        <code className="format-code">
          toolchecknative://device/{deviceId}
        </code>
        <p className="deep-link-info">
          When users click deep links in the native app, they will be directed to this specific device form
          with the device ID pre-populated.
        </p>
      </div>
    </div>
  )
}

export default DeviceIdForm