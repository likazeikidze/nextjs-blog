import { MongoClient } from "mongodb";

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

  let client;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Could not connect to database." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const db = client.db();

  try {
    const result = await db.collection("messages").insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (error) {
    client.close();
    return new Response(
      JSON.stringify({ message: "Storing message failed!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  client.close();

  return new Response(
    JSON.stringify({
      message: "Successfully stored message!",
      data: newMessage,
    }),
    { status: 201, headers: { "Content-Type": "application/json" } }
  );
}
