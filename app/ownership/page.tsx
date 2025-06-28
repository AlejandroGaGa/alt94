import ListProperty from "../components/OwnerShip/ListProperty";

export default function Ownership({ searchParams }: { searchParams: { page: string } }) {
    const currentPage = parseInt(searchParams.page ?? "1", 10);

    return (
        <div className="container mx-auto">
            <ListProperty currentPage={currentPage} />
        </div>
    )
}

