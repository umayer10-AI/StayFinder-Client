import Details from '@/component/Details';
import { singleHotelData } from '@/lib/api/get';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({params}: PageProps) => {

    const {id} = await params
    const hotel = await singleHotelData(id)

    return (
        <div>
            <Details hotel={hotel}></Details>
        </div>
    );
};

export default page;