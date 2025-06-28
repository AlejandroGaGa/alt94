import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { RecommendedOwnersships } from "@/app/interfaces/OwnerShips/RecommendedOwnersships";

const RecommendOwnerShips = ({ price, type, city }: RecommendedOwnersships) => {
    console.log(price, type, city);
    return (
        <div>
            <Disclosure as="div" className="p-2" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between bg-gray-100 rounded-md p-2 cursor-pointer">
                    <span className="cursor-pointer">
                        Algunas recomendaciones                    </span>
                    <ChevronDownIcon className="size-5 fill-black/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
                Estas son algunas recomendaciones basadas en esta propiedad                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default RecommendOwnerShips;