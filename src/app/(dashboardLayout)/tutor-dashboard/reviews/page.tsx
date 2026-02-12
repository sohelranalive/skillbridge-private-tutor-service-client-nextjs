import { getSessionAction } from "@/actions/user.actions";
import { tutorService } from "@/service/tutor.service";
import { userService } from "@/service/user.service";

export default async function ReviewPage() {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  const tutor = await tutorService.getTutorByUserId(user.id);
  const tutorId = tutor.data.data.tutor_id;

  const allReviews = await tutorService.getReviewsBtTutorId(tutorId);
  const reviews = allReviews.data?.data;

  console.log(reviews);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Name & Id
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Comment
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Ratings
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {reviews?.map((review: any) => (
              <tr
                key={review.id}
                className="hover:bg-gray-300 dark:hover:bg-gray-900/50 transition-colors"
              >
                <td className="px-6 py-4">
                  {review.student.name} <br />
                  <br />
                  {review.student.id}
                </td>
                <td className="px-6 py-4">{review.reviewText}</td>
                <td className="px-6 py-4">{review.ratings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
