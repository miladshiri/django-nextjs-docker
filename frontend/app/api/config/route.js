export async function GET(request) {
  return Response.json({
    apiUrl: process.env.BACKEND_URL,
  });
}
