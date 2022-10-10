import image from '../img/quiz_header.jpg'
export const HeaderBanner = () => {
    return (
      <div className="relative">
        <img
          src={image}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75 h-[80vh]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center ">
              <div className="w-full max-w-xl  xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Faith is more than getting a theological quiz right.
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                I want to have my own quiz show. I want to do a Saturday night, wear a suit and do one of those shiny floor shows.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };