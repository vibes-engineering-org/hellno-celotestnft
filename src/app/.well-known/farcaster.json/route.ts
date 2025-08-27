import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJoZWxsbm8tY2Vsb3Rlc3RuZnQudmVyY2VsLmFwcCJ9",
      signature: "MHhiZTUyYThiMDBlYmIwY2Q0ODhlODQxYjlmMzc5NzJkYWVjZjE5YmM0M2U2YzQzYmQ2M2FmOGY5ZGQwZjM4YWE1N2ZhMGM0ZDM4N2I0Y2JjMjAxZDIwYWFkMDZiOGJmYWE4NDU4YjY0Y2ZiZTE5ZGE2ZTYxN2JhMDExNmZkN2E0YjFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555"
    }
  };

  return Response.json(config);
}
