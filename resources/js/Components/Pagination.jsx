import { Link } from "@inertiajs/react";

export default function Pagination({links}){
return (
    <nav className="text-center mt-4">
        {
            links.map((link)=>(
                <Link
                preserveScroll={true}
                key={link.label}
                href={link.url || ''}
                className={
                "inline-block py-2 px-3 rounded-lg text-gray-950 text-xs  "+
                (link.active ? ' !bg-gray-200 ' :'') +
                (!link.url ? '!text-gray-500 cursor-not-allowed '  : 'hover:bg-gray-200 ')
                }

                dangerouslySetInnerHTML={{ __html: link.label }}></Link>
            ))
        }
    </nav>
)
}
