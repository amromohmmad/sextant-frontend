import React, { useEffect, useState } from 'react';

function IpAddress({ version }) {
    const [ip, setIp] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Choose API URL based on prop (v4 or v6)
        const url =
            version === 'v6'
                ? 'https://api64.ipify.org?format=json'
                : 'https://api.ipify.org?format=json';

        // Fetch IP address
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setIp(data.ip))
            .catch((err) => setError(err.message));
    }, [version]); // re-run if version changes

    return (
        <div>
            <h3>Your Public {version === 'v6' ? 'IPv6' : 'IPv4'} Address:</h3>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {ip ? <p>{ip}</p> : <p>Loading...</p>}
        </div>
    );
}

export default IpAddress;
