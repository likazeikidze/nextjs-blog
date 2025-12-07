export async function POST(req) {
  const data = await req.json();

  const { email, name, message } = data;

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    return new Response(JSON.stringify({ message: "Invalid input." }), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newMessage = {
    email,
    name,
    message,
  };

  console.log(newMessage);

  return new Response(
    JSON.stringify({
      message: "Successfully stored message!",
      data: newMessage,
    }),
    { status: 201, headers: { "Content-Type": "application/json" } }
  );
}
