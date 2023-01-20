export default function Home() {
  return (
    <>
        <nav className="flex items-center flex-wrap p-5">
            <a className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/">
                C++ Blog
            </a>
        </nav>
        <div className="flex flex-col flex-grow">
            <div className="p-5">
                <div className="max-w-3xl mx-auto text-center items-center mt-10 py-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug">C++
                        Blog</h1>
                    <div className="md:text-lg py-10">
                        <p className="text-gray-500">Hey, this is a starting blog about programming language c++.</p>
                    </div>
                </div>
            </div>
            <div className="m-5 flex-grow max-w-screen-lg lg:mx-auto lg:flex lg:flex-wrap">
                <div className="lg:pr-20 lg:w-2/3">
                    <div className="my-20">
                        <a className="group focus:outline-none" href="/example">
                            <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">
                                Article Header
                            </h2>
                            <p className="my-5 text-lg text-gray-500">
                                Description
                            </p>
                        </a>
                    </div>
                    <div className="my-20">
                        <a className="group focus:outline-none" href="/example">
                            <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">
                                Article Header
                            </h2>
                            <p className="my-5 text-lg text-gray-500">
                                Description
                            </p>
                        </a>
                    </div>
                    <div className="my-20">
                        <a className="group focus:outline-none" href="/example">
                            <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">
                                Article Header
                            </h2>
                            <p className="my-5 text-lg text-gray-500">
                                Description
                            </p>
                        </a>
                    </div>
                    <div className="my-20">
                        <a className="group focus:outline-none" href="/example">
                            <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">
                                Article Header
                            </h2>
                            <p className="my-5 text-lg text-gray-500">
                                Description
                            </p>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:p-5">
                    <div className="my-16">
                        <h3 className="uppercase text-sm font-bold py-2 text-gray-500">
                            <a href="/blog">Categories</a>
                        </h3>
                        <ul className="text-xl font-medium leading-loose">
                            <li>
                                <a href="/blog/code">Code</a>
                            </li>
                            <li>
                                <a href="/blog/projects">Projects</a>
                            </li>
                            <li>
                                <a href="/blog/software">Software</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
