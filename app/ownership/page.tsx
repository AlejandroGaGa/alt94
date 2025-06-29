import BannerOwnership from "../components/OwnerShip/BannerOwnership";
import FilterBar from "../components/OwnerShip/Filters/FIlterBar";
import ListProperty from "../components/OwnerShip/ListProperty";

/* 
* @description: Página de propiedades
* @param searchParams: Los parámetros de la URL
* @returns: La página de propiedades
*/
export default function Ownership({
    searchParams,
  }: {
    searchParams: { page?: string; city?: string; type?: string; price?: string; useVector?: boolean };
  }) {
    const currentPage = parseInt(searchParams.page ?? '1', 10);
    const filters = {
      city: searchParams.city ?? '',
      type: searchParams.type ?? 'all',
      price: searchParams.price ?? 'all',
      useVector: searchParams.useVector ?? false,
    };

    return (
      <div>
        <BannerOwnership title="Inmuebles en venta" />
        <div className="container mx-auto">
          <FilterBar />
        </div>
        <div className="container mx-auto">
          <ListProperty currentPage={currentPage} filters={filters}  />
        </div>
      </div>
    );
  }
  