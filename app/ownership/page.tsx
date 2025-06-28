import BannerOwnership from "../components/OwnerShip/BannerOwnership";
import FilterBar from "../components/OwnerShip/Filters/FIlterBar";
import ListProperty from "../components/OwnerShip/ListProperty";

export default function Ownership({
    searchParams,
  }: {
    searchParams: { page?: string; city?: string; type?: string; price?: string };
  }) {
    const currentPage = parseInt(searchParams.page ?? '1', 10);
    const filters = {
      city: searchParams.city ?? '',
      type: searchParams.type ?? 'all',
    };
  
    return (
      <div>
        <BannerOwnership />
        <div className="container mx-auto">
          <FilterBar />
        </div>
        <div className="container mx-auto">
          <ListProperty currentPage={currentPage} filters={filters} />
        </div>
      </div>
    );
  }
  