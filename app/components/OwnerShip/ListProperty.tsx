import { ownerships } from "@/app/libs/owners-request";
import CardProperty from "./CardProperty";

const ListProperty = async () => {
    const ownershipsfeched = await ownerships.getOwnerships(1, 10);
    console.log("ownerships", ownershipsfeched);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {ownershipsfeched.data.map((ownership: any) => (
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
    )
}

export default ListProperty;