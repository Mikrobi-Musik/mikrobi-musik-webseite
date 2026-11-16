import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";
import AdminClient from "./AdminClient";

export default async function AdminDashboardPage() {
  const cookieStore = cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const isValid = await verifyAdminToken(token);

  if (!isValid) {
    redirect("/admin/login");
  }

  return <AdminClient />;
}