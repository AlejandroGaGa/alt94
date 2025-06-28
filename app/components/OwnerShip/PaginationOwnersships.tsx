import Link from "next/link";

interface Props {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
}

const PaginationOwnersships = ({ currentPage, totalItems, itemsPerPage }: Props) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center gap-2">
            {currentPage > 1 && (
                <Link href={`?page=${currentPage - 1}`} title="Anterior">
                    <button className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-200 flex items-center justify-center">
                        ‹
                    </button>
                </Link>
            )}
            {pages.map((page) => (
                <Link key={page} href={`?page=${page}`} title={`Page ${page}`}>
                    <button
                        className={`w-8 h-8 rounded-full border text-sm ${
                            page === currentPage
                                ? "bg-black text-white"
                                : "border-gray-300 hover:bg-gray-100 cursor-pointer"
                        } flex items-center justify-center`}
                    >
                        {page}
                    </button>
                </Link>
            ))}
            {currentPage < totalPages && (
                <Link href={`?page=${currentPage + 1}`} title="Siguiente">
                    <button className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-200 flex items-center justify-center cursor-pointer">
                        ›
                    </button>
                </Link>
            )}
        </div>
    );
};

export default PaginationOwnersships;
