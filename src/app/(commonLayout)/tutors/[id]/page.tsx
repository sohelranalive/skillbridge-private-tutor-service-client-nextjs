import TutorProfile from "@/components/layout/TutorProfile";
import { tutorService } from "@/service/tutor.service";
import { userService } from "@/service/user.service";

export default async function TutorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await tutorService.getTutorById(id as string);

  return <TutorProfile tutor={data.data} />;
}
