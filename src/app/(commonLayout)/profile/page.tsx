import { getSessionAction } from "@/actions/user.actions";
import UserProfile from "@/components/layout/UserProfile";
import { userService } from "@/service/user.service";

export default async function ProfilePage() {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  return <UserProfile user={user} />;
}
