import ListProperty from "../components/OwnerShip/ListProperty";
import BannerOwnership from "../components/OwnerShip/BannerOwnership";
import FilterBar from "../components/OwnerShip/Filters/FIlterBar";

export default function Ownership({ searchParams }: { searchParams: { page: string } }) {
    const currentPage = parseInt(searchParams.page ?? "1", 10);

    return (
        <div>
            <BannerOwnership />
            <div className="container mx-auto">
                <FilterBar />
            </div>
            <div className="container mx-auto">
                <ListProperty currentPage={currentPage} />
            </div>
        </div>
    )
}

