import { getSessionAction } from "@/actions/user.actions";
import MyReviewsTable from "@/components/layout/MyReviewsTable";

export default async function ReviewPage() {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  return <MyReviewsTable user={user} />;
}
