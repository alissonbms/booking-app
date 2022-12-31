import { Router } from "express";

import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51LttFXG0STcTyVBUPs93BLz6AoyOjm5TouRy6zbWw7jsBjFmIikKjFAefZ7aXFYOk6OpibeaBQeUzpGo3Yu7NlTA00MvsNIpTt"
);

const PAYMENT_CONFIRMATION_URL = "http://127.0.0.1:3006/payment-confirmation";

const router = Router();

router.post("/create-checkout-session", async (req, res) => {
  const items = req.body.buyRooms.map((room) => ({
    price_data: {
      currency: "brl",
      product_data: {
        name: room.name,
      },
      unit_amount: parseInt(`${room.price}00`),
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: "payment",
    success_url: `${PAYMENT_CONFIRMATION_URL}?success=true`,
    cancel_url: `${PAYMENT_CONFIRMATION_URL}?canceled=true`,
  });

  res.send({ url: session.url });
});

export default router;
