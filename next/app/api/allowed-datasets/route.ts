// import { NextRequest, NextResponse } from "next/server";
// import ky from "ky";
// import fetchUserProjectRoles from "@/sanity/lib/list-datasets-by-role/fetch-project-data";

// const SANITY_API_VERSION = "2023-08-15";

// const sanityApi = ky.extend({
//   hooks: {
//     beforeRequest: [
//       (request) => {
//         request.headers.set(
//           "Authorization",
//           `Bearer ${process.env.SANITY_API_TOKEN}`,
//         );
//       },
//     ],
//   },
//   prefixUrl: `https://api.sanity.io/v${SANITY_API_VERSION}/projects/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
// });

// export async function GET(request: NextRequest) {
//   const roleNames = request.nextUrl.searchParams.getAll("role");
//   const userProjectRoles = await fetchUserProjectRoles(sanityApi, roleNames);
//   return NextResponse.json(userProjectRoles);
// }
