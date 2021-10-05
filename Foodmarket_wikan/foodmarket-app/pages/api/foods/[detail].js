import data from "./foodlist.json";

export function getDetailFood(detail) {
  const foods = data.filter((food) => food.id == detail);

  return foods.length ? foods[0] : [];
}

export default function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", ["GET"]);
    response
      .status(405)
      .json({ message: `Method${request.method} is not allowed` });
  } else {
    const foods = getDetailFood(request.query.detail);
    response.status(200).json(foods);
  }
}
