import BlogCard from './BlogCard'

const Blog = () => {
  const blogs = [
    {
      title: "10 Tips for Effective React Development",
      imageSrc: "/images/b1.jpg",
      link: "https://react.dev/blog/2023/03/16/introducing-react-dev"
    },
    {
      title: "Understanding Next.js Routing",
      imageSrc: "/images/b2.jpg",
      link: "https://nextjs.org/docs/routing/introduction"
    },
    {
      title: "Tailwind CSS: Building Modern UIs",
      imageSrc: "/images/b3.jpg",
      link: "https://tailwindcss.com/docs/utility-first"
    }
  ];

  return (
    <div className="text-white py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Blog</h1>

      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
          >
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <BlogCard imageSrc={blog.imageSrc} title={blog.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
