import Link from "next/link";
import { PaginationOwnersshipsProps } from "@/app/interfaces/OwnerShips/PaginationOwnersshipsProps";

const PaginationOwnersships = ({ currentPage, totalItems, itemsPerPage }: PaginationOwnersshipsProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex justify-center sm:justify-center items-center gap-1 sm:gap-2 py-2 w-max sm:w-auto mx-auto">
                {currentPage > 1 && (
                    <Link href={`?page=${currentPage - 1}`} title="Anterior">
                        <button className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-200 flex items-center justify-center cursor-pointer">
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
        </div>
    );
};

export default PaginationOwnersships;
