import rest from "@/hooks/key_store"; // Import the `rest` variable from the key_store

'https://restgpt-cfbbd06a935f.herokuapp.com/api/chat/'

export async function POST(request) {
  try {
    const chatData = await request.json();
    const requestBody = {
      ...chatData,
      rest,
    };


    const response = await fetch('http://127.0.0.1:8000/api/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const reader = response.body.getReader();
    const stream = new ReadableStream({
      async pull(controller) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'GET request not supported for this endpoint' }), { status: 405 });
}
