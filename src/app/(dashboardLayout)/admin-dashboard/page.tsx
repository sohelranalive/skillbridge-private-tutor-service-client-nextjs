import BookingCharts from "@/components/dashboard/BookingStats";
import TutorCharts from "@/components/dashboard/TutorStats";
import { adminService } from "@/service/admin.service";
import { tutorService } from "@/service/tutor.service";

export default async function AdminDashboardHome() {
  const allTutorData = await tutorService.getTutor(
    {},
    {
      cache: "no-store",
    },
  );
  const tutors = allTutorData.data.data.data;

  const allBookingData = await adminService.getBooking();
  const bookings = allBookingData.data.data;

  console.log("Tutors Data: ", tutors);
  console.log("Booking Data: ", bookings);

  return (
    <div className="space-y-4">
      <TutorCharts tutors={tutors} />
      <BookingCharts bookings={bookings} />
    </div>
  );
}
