import AllCards from "@/component/AllCards";
import { allHotelsData } from "@/lib/api/get";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    page?: string;
  }>;
}) => {
  const params = await searchParams;

  const data = await allHotelsData(
    params.search || "",
    params.category || "",
    Number(params.page) || 1
  );

  return (
    <div className="max-w-[80%] mx-auto mb-20">
      <AllCards
        hotels={data.hotels}
        totalPages={data.totalPages}
        currentPage={data.currentPage}
      />
    </div>
  );
};

export default page;