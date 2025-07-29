import { Link, useLocation } from "react-router";
import { ChipList } from "@syncfusion/react-buttons";

const TripsCard = ({
  id,
  price,
  imageUrl,
  location,
  name,
  tags,
}: TripCardProps) => {
  const path = useLocation();
  return (
    <Link
      to={
        path.pathname === "/" || path.pathname.startsWith("/travel")
          ? `/travel/${id}`
          : `/trips/${id}`
      }
      className="trip-card"
    >
      <img src={imageUrl} alt={name} />
      <article>
        <h2>{name}</h2>
        <figure>
          <img
            src="/assets/icons/location-mark.svg"
            alt="location"
            className="size-4"
          />
          <figcaption>{location}</figcaption>
        </figure>
      </article>
      <div className="mt-5 pl-[18px] pr-3.5 pb-5">
        <ChipList chips={tags} selection="single"></ChipList>
      </div>

      <article className="tripCard-pill">{price}</article>
    </Link>
  );
};

export default TripsCard;
