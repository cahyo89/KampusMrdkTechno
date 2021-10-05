import data from "./foodlist.json";

export function getFoods() {
  return data;
}

export default function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", ["GET"]);
    response
      .status(405)
      .json({ message: `Method${request.method} is not allowed` });
  } else {
    const foods = getFoods();
    response.status(200).json(foods);
  }
}
