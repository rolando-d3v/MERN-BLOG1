import { useState } from "react";
import Link from "next/link";
import {TiDeleteOutline} from 'react-icons/ti'
import {
  FaChevronDown,
  FaBars,
  FaChartBar,
  FaSyncAlt,
  FaThLarge,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaPhone,
  FaPlayCircle,
} from "react-icons/fa";

export default function Home() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [sidebarPhone, setSidebarPhone] = useState(false);

  const showSidebarPhone = () => {
    setSidebarPhone(!sidebarPhone);
  };

  const hiddenDrop = () => {
    setDrop(!drop);
  };

  const hiddenDrop2 = () => {
    setDrop2(!drop2);
  };

  const dropList1 = [
    {
      id: 1,
      name: "Analisis",
      url: "/",
      icon: <FaChartBar className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: " Get a better understanding of where your traffic is coming from.",
    },
    {
      id: 2,
      url: "/",
      name: "Engagement",
      icon: (
        <FaExternalLinkAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" />
      ),
      text: "Speak directly to your customers in a.",
    },
    {
      id: 3,
      url: "/",
      name: "Security",
      icon: <FaShieldAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: " Your customers data will be safe and secure.",
    },
    {
      id: 4,
      url: "/",
      name: "Integracion",
      icon: <FaThLarge className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: " Connect with third-party tools that you’re already using.",
    },
    {
      id: 5,
      url: "/",
      name: "Automatizacion",
      icon: <FaSyncAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: "Build strategic funnels that will drive your customers to convert",
    },
  ];

  const dropList2 = [
    {
      id: 1,
      name: "Analisis",
      url: "/",
      icon: <FaChartBar className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: " Get a better understanding of where your traffic is coming from.",
    },
    {
      id: 2,
      url: "/",
      name: "Engagement",
      icon: (
        <FaExternalLinkAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" />
      ),
      text: "Speak directly to your customers in a more meaningful way.",
    },
    {
      id: 3,
      url: "/",
      name: "Seguridad",
      icon: <FaShieldAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: " Your customers data will be safe and secure.",
    },
    {
      id: 4,
      url: "/",
      name: "Integracion",
      icon: <FaThLarge className="flex-shrink-0 h-6 w-6 text-indigo-600" />,
      text: " Connect with third-party tools that you’re already using.",
    },
  ];
  // 730

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <img
                className="h-8 w-auto sm:h-10 mr-1"
                src="/assets/react.png"
                alt="Workflow"
              />
              <span className='text-indigo-600 font-bold text-2xl ' >React</span>
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center  p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500  transition duration-150 ease-in-out"
              onClick={() => showSidebarPhone()}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <button
                type="button"
                className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                onClick={() => hiddenDrop()}
              >
                <span>Soluciones</span>
                <FaChevronDown className="text-gray-400 hover:text-gray-500 h-3 w-3" />
              </button>

              <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div
                  className={`${
                    drop ? "flex" : "hidden"
                  } "rounded-lg shadow-lg" `}
                >
                  <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {dropList1.map((ev) => (
                        <Link href={ev.url} key={ev.id}>
                          <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                            {ev.icon}
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                {ev.name}
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                {ev.text}
                              </p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>

                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="flow-root">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <FaPlayCircle className="flex-shrink-0 h-6 w-6 text-gray-400" />
                          <span>Watch Demo</span>
                        </a>
                      </div>
                      <div className="flow-root">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <FaPhone className="flex-shrink-0 h-6 w-6 text-gray-400" />
                          <span>Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Precio
            </a>
            <a
              href="#"
              className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Documentacion
            </a>

            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                type="button"
                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                onClick={() => hiddenDrop2()}
              >
                <span>Mas</span>
                <FaChevronDown className="text-gray-400 hover:text-gray-500 h-3 w-3" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div
                  className={`${
                    drop2 ? "flex" : "hidden"
                  } "rounded-lg shadow-lg" `}
                >
                  <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {dropList2.map((ev) => (
                        <Link href={ev.url} key={ev.id}>
                          <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                            {ev.icon}
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                {ev.name}
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                {ev.text}
                              </p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-5 sm:px-8 sm:py-8">
                      <div className="space-y-4">
                        <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="space-y-4">
                          <li className="text-base leading-6 truncate">
                            <a
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                            >
                              Boost your conversion rate
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="text-sm leading-5">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                        >
                          View all posts &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign in
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* MOVIL */}
      <section className="absolute top-0 inset-x-0  transition transform origin-top-right md:hidden">
        <div
          className={`${
            sidebarPhone ? "flex-col" : "hidden"
          } "rounded-lg shadow-lg"`}
        >
          <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div className="pt-2 pb-6 px-4 space-y-6">
              <div className="flex items-center justify-between">
                <a className='flex items-center'  >
                  <img
                    className="h-8 w-auto mr-1"
                    src="/assets/react.png"
                    alt="Workflow"
                  />
                 <span className='text-indigo-600 font-bold text-2xl ' >React</span>
                </a>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center my-2 mr-1 rounded-md text-gray-400  focus:outline-none focus:text-gray-500"
                    onClick={() => showSidebarPhone()}
                  >
                    <TiDeleteOutline  className="h-8 w-8"/>
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid gap-y-8">
                  {dropList1.map((ev) => (
                    <Link href={ev.url} key={ev.id}>
                      <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                        {ev.icon}
                        <div className="space-y-1">
                          <p className="text-base leading-6 font-medium text-gray-900">
                            {ev.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Docs
                </a>
                {dropList2.map((ev) => (
                  <Link href={ev.url} key={ev.id}>
                    <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      {ev.icon}
                      <div className="space-y-1">
                        <p className="text-base leading-6 font-medium text-gray-900">
                          {ev.name}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              <div className="space-y-6">
                <span className="w-full flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Sign up
                  </a>
                </span>
                <p className="text-center text-base leading-6 font-medium text-gray-500">
                  Existing customer?
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
