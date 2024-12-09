import Link from "next/link";
export default function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}){
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='mb-4 text-xl font-semibold leading-6 text-gray-800 dark:text-white-100 md:mb-6'>
        {title}
      </h3>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className='text-base font-medium leading-5 text-gray-400 hover:text-gray-500 dark:text-white-200'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};