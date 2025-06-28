import { ownerships, } from "@/app/libs/owners-request";
import CardProperty from "./CardProperty";
import PaginationOwnersships from "./PaginationOwnersships";
import { ownershipsFetched } from "@/app/interfaces/Filters/FilterBarProps";

const ListProperty = async ({ currentPage = 1, filters }: {
    currentPage?: number, filters: ownershipsFetched; 
}) => {
    const itemsPerPage = 10;
    let ownershipsFetchedBy = [];
    let ownershipsFetched = [];

    if(filters.type !== "all" || filters.city !== "") {
        ownershipsFetchedBy = await ownerships.getOwnershipsBy(filters.type, filters.city);
    }else{
        ownershipsFetched = await ownerships.getOwnerships(currentPage, itemsPerPage);;
    }
    
    const ownershipsToShow = ownershipsFetchedBy?.data?.length > 0 ? ownershipsFetchedBy : ownershipsFetched;

    return (
        <div className="flex flex-col gap-4 mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {ownershipsToShow?.data?.map((ownership: any) => (
                    <CardProperty
                        key={ownership.id}
                        title={ownership.titulo}
                        size={ownership.metros_cuadrados}
                        price={ownership.precio}
                        type={ownership.tipo}
                        city={ownership.ciudad}
                        image={ownership.imagen}
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
