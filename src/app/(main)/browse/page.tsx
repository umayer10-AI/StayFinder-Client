import AllCards from "@/component/AllCards";
import { allHotelsData } from "@/lib/api/get";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
}) => {
  const params = await searchParams;

  const hotels = await allHotelsData(
    params.search || "",
    params.category || ""
  );

  return (
    <div className="max-w-[80%] mx-auto mb-20">
      <AllCards hotels={hotels} />
    </div>
  );
};

export default page;