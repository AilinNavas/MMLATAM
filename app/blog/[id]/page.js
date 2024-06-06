import blogData from "@/app/ui/data/blogData";
import Link from "next/link";

export default function Page({ params }) {
    const article = blogData.find(article => article.id.toString() === params.id);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <section className='bg-[#0F0F11] py-20 p-4'>
            <div className={`container space-y-4 text-white mx-auto p-8 max-w-7xl bg-[#18181B] rounded-md border-t-4 ${article.colorCategory}`}>
                <h3 className=" text-xl font-bold ">{article.title}</h3>
                <p className="text-gray-200">{article.category}</p>
                {article.content.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-lg">{section.subtitle}</h4>
                        <p>{section.paragraph}</p>
                    </div>
                ))}
              <Link href={'/blog'}>
              <div className="flex justify-end items-end">
                <span> ← Volver</span>
              </div>
              </Link>
            </div>
        </section>
    );
}