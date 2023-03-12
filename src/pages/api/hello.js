// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../../helpers/db";

export default function handler(req, res) {
  db.dbConnect();
  db.dbDisconnect();
  res.status(200).json({ name: "John Doe" });
}
