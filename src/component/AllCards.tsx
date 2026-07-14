import Card from "./Card";
import HotelSearch from "./HotelSearch";
import Pagination from "./Pagination";

interface AllCardsProps {
  hotels: Hotel[];
  totalPages: number;
  currentPage: number;
}

const AllCards = ({
  hotels,
  totalPages,
  currentPage,
}: AllCardsProps) => {
  return (
    <div>
      <div className="my-10">
        <HotelSearch />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <Card key={hotel._id} hotel={hotel} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AllCards;