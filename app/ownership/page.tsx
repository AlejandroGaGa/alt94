import BannerOwnership from "../components/OwnerShip/BannerOwnership";
import FilterBar from "../components/OwnerShip/Filters/FIlterBar";
import ListProperty from "../components/OwnerShip/ListProperty";

/* 
* @description: Página de propiedades
* @param searchParams: Los parámetros de la URL
* @returns: La página de propiedades
*/

export default async function Ownership(props: any) {
  const searchParams = (props.searchParams && typeof props.searchParams.then === 'function')
    ? await props.searchParams
    : props.searchParams || {};
  const currentPage = parseInt(Array.isArray(searchParams.page) ? searchParams.page[0] ?? '1' : searchParams.page ?? '1', 10);
  const filters = {
    city: Array.isArray(searchParams.city) ? searchParams.city[0] ?? '' : searchParams.city ?? '',
    type: Array.isArray(searchParams.type) ? searchParams.type[0] ?? 'all' : searchParams.type ?? 'all',
    price: Array.isArray(searchParams.price) ? searchParams.price[0] ?? 'all' : searchParams.price ?? 'all',
    useVector: Array.isArray(searchParams.useVector)
      ? searchParams.useVector[0] === 'true'
      : searchParams.useVector === 'true',
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
  