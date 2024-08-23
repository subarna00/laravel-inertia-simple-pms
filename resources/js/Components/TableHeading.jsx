import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
  name,
  sortable = false,
  children,
  sort_field = null,
  sort_direction = null,
  sortChanged = ()=>{}
}) {
  return (
    <th onClick={(e) => sortChanged(name)}>
      <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer flex-nowrap">
        {children}
        {sortable && (
          <div>
            <ChevronUpIcon
              className={` w-4 ${
                sort_field === name && sort_direction === "asc"
                  ? "text-gray-500"
                  : " "
              } `}
            />
            <ChevronDownIcon
              className={
                " w-4 -mt-2 " +
                (sort_field === name && sort_direction === "desc"
                  ? "text-gray-500"
                  : "")
              }
            />
          </div>
        )}
      </div>
    </th>
  );
}
