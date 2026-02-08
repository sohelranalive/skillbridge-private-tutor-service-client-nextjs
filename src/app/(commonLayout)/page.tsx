import Banner from "@/components/home-layout/Banner";
import FeaturedTutors from "@/components/home-layout/FeaturedTutors";
import Footer from "@/components/home-layout/Footer";
import TeachingCategory from "@/components/home-layout/TeachingCategory";
import TestimonialPage from "@/components/home-layout/Testimonial";
import { adminService } from "@/service/admin.service";
import { studentService } from "@/service/student.service";
import { tutorService } from "@/service/tutor.service";

export default async function Home() {
  // Getting featured tutors for landing page
  const featuredTutors = await tutorService.getTutor(
    {
      isFeatured: true,
      ratings: 3,
    },
    {
      cache: "no-store",
    },
  );
  const tutors = featuredTutors.data?.data.data.slice(0, 4) || [];

  // Getting category for landing page
  const teachingCategory = await adminService.getCategory();
  const categories = teachingCategory.data?.data || [];

  // Getting review for landing page
  const studentReview = await studentService.getReview();
  const reviews = studentReview.data?.data.slice(0, 3) || [];

  return (
    <div className="landing-page min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="landing-page min-h-screen">
        {/* Banner */}
        <Banner />
        {/* Categories */}
        <TeachingCategory categories={categories} />
        {/* Tutors */}
        <FeaturedTutors tutors={tutors} />
        {/* Testimonial */}
        <TestimonialPage reviews={reviews} />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
