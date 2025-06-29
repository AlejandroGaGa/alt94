import { ownerships, } from "@/app/libs/owners-request";
import CardProperty from "./CardProperty";
import PaginationOwnersships from "./PaginationOwnersships";
import { ownershipsFetched } from "@/app/interfaces/Filters/FilterBarProps";

const ListProperty = async ({ currentPage = 1, filters }: {
    currentPage?: number, filters: ownershipsFetched;
}) => {
    console.log(filters, 'filters');
    const itemsPerPage = 10;
    let ownershipsFetchedBy = [];
    let ownershipsFetched = [];
    let isFiltered = false;

    if (filters.type !== "all" || filters.city !== "" && filters.useVector === false) {

        ownershipsFetchedBy = await ownerships.getOwnershipsBy(filters.type, filters.city);
        isFiltered = true;
    } else {
        ownershipsFetched = await ownerships.getOwnerships(currentPage, itemsPerPage);
        isFiltered = false;
    }

    const ownershipsToShow = ownershipsFetchedBy?.data?.length > 0 ? ownershipsFetchedBy : ownershipsFetched;


    return (
        <div className="flex flex-col gap-4 mt-10">

            {
                ownershipsToShow?.data?.length === 0 || ownershipsToShow?.length === 0 && (
                    <div className="flex flex-col items-center h-screen">
                        <h1 className="text-2xl font-bold">No se encontraron resultados</h1>
                    </div>
                )
            }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {ownershipsToShow?.data?.map((ownership: any) => (
                    <CardProperty
                        id={ownership.id}
                        key={ownership.id}
                        title={ownership.titulo}
                        size={ownership.metros_cuadrados}
                        price={ownership.precio}
                        type={ownership.tipo}
                        city={ownership.ciudad}
                        image={ownership.imagen}
                        rooms={ownership.ambientes}
                        isFiltered={isFiltered}
                    />
                ))}
            </div>
            {
                ownershipsFetched?.data?.length > 0 && (
                    <PaginationOwnersships
                        currentPage={currentPage}
                        totalItems={ownershipsFetched.total}
                        itemsPerPage={itemsPerPage}
                    />
                )
            }

        </div>
    );
};

export default ListProperty;
