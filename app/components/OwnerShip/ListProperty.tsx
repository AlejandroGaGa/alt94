import { ownerships } from "@/app/libs/owners-request";
import CardProperty from "./CardProperty";
import PaginationOwnersships from "./PaginationOwnersships";

const ListProperty = async ({ currentPage = 1 }: { currentPage?: number }) => {
    const itemsPerPage = 10;
    const ownershipsFetched = await ownerships.getOwnerships(currentPage, itemsPerPage);

    return (
        <div className="flex flex-col gap-4 mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {ownershipsFetched.data.map((ownership: any) => (
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
            <PaginationOwnersships
                currentPage={currentPage}
                totalItems={ownershipsFetched.total}
                itemsPerPage={itemsPerPage}
            />
        </div>
    );
};

export default ListProperty;
