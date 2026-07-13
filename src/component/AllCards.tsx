import Card from "./Card";
import HotelSearch from "./HotelSearch";

interface Hotel {
  _id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  contact: string;
  price: string;
  image: string;
}

interface AllCardsProps {
  hotels: Hotel[];
}

const AllCards = ({ hotels }: AllCardsProps) => {
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
    </div>
  );
};

export default AllCards;