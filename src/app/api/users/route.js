const { default: mongoose } = require("mongoose");
const { default: connectToDb } = require("../../../../database/db");
const { NextResponse } = require("next/server");
const { userValidation } = require("../../../../validation/users");

export async function POST(req) {
  try {
    await connectToDb();

    console.log(req);
    const { body } = await req.json();

    console.log(body);

    const validate = userValidation.safeParse(data);

    console.log("validate user ->", validate);

    return NextResponse.json(data);
  } catch (error) {
    console.log("error -> ", error);
  }
}
