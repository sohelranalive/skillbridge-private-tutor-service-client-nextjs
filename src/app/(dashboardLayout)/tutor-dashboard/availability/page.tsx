import { getSessionAction } from "@/actions/user.actions";
import TutorAvailabilityPage from "@/components/layout/TutorAvailability";
import { tutorService } from "@/service/tutor.service";
import { userService } from "@/service/user.service";

export default async function AvailabilityPage() {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  const tutor = await tutorService.getTutorByUserId(user.id);
  const tutorId = tutor.data.data.tutor_id;

  return <TutorAvailabilityPage tutorId={tutorId} />;
}
