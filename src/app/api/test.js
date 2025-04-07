const fetch = require('node-fetch');

async function testPOST() {
  const testData = {
    message: "Hello, this is a test message",
    userId: 12345
  };

  try {
    const response = await fetch('https://kuezetbotlogic-production.up.railway.app/api/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    // Instead of using getReader(), read the response as text or JSON
    const result = await response.text(); // Use `.json()` if expecting JSON

    console.log("Response from API:", result);
  } catch (error) {
    console.error("Test request failed:", error);
  }
}

testPOST();
