import FavoritesList from '../components/FavoritesList';
import BannerOwnership from '../components/OwnerShip/BannerOwnership';

export default function FavoritesPage() {
    return (
        <>
            <BannerOwnership title="Mis Propiedades Favoritas" />

            <div className="container mx-auto px-4 py-8">

                <div className="max-w-7xl mx-auto">
                    <FavoritesList />
                </div>
            </div>
        </>

    );
} 