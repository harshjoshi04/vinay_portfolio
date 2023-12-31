import React from "react";

const Project = () => {
  return (
    <div
      className="bg-mainSecond w-full h-full md:h-[90vh] flex md:justify-center sm:px-4 pb-4"
      id="projects"
    >
      <div className="w-full px-4 md:px-0 md:w-[60vw] pt-16 h-[100%] ">
        <div className="flex flex-col justify-center space-y-16 ">
          <div className="flex w-full flex-col items-center space-y-3">
            <p className="uppercase text-second -tracking-tight">Project</p>
            <p className="text-4xl text-center">
              Welcome to My Digital Showcase! 🚀
            </p>
            <p className="text-center">
              Here, you will discover more than just projects; you willl find
              solutions that blend functionality with design, creating immersive
              digital experiences. From transforming e-commerce platforms to
              crafting wellness apps, each project reflects my commitment to
              excellence and my passion for pushing the boundaries of whats
              possible in the digital realm
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center  gap-8 px-4 ">
            <div className="w-full md:w-[16vw] h-[48vh] bg-mainFirst flex flex-col shadow-lg rounded ">
              <div className="w-full h-[45%] overflow-hidden">
                <img
                  src="/corona.jpg"
                  alt="Corona"
                  className="object-cover w-full h-full rounded  transition hover:scale-110"
                />
              </div>
              <div className="px-4 py-6 flex flex-col justify-items-start space-y-3">
                <p className="text-second text-lg">Corona Tracker</p>
                <p className="line-clamp-6   text-sm">
                  Developed a dynamic and user-friendly mobile application using
                  Flutter to address the ongoing COVID-19 pandemic. The app
                  provides real-time global and local statistics, interactive
                  maps, and vaccination updates, empowering users to stay
                  informed and take necessary precautions. Features include
                  personalized alerts, a symptom checker, and a supportive
                  community platform.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[16vw] h-[48vh] bg-mainFirst flex flex-col shadow-lg rounded ">
              <div className="w-full h-[45%] overflow-hidden">
                <img
                  src="/spotify.jpg"
                  alt="Corona"
                  className="object-cover w-full h-full rounded  transition hover:scale-110"
                />
              </div>
              <div className="px-4 py-6 flex flex-col justify-items-start space-y-3">
                <p className="text-second text-lg">Spotify Clone</p>
                <p className="line-clamp-6   text-sm">
                  Created a sleek and functional Spotify clone using Flutter,
                  showcasing my proficiency in mobile app development. This
                  project replicates key features of the popular music streaming
                  platform, including a responsive user interface, seamless
                  navigation, and real-time audio playback. Leveraging Flutter
                  widget-based approach, the app ensures a smooth and immersive
                  user experience. The Spotify Clone project highlights my
                  skills in UI/UX design, API integration, and audio streaming
                  functionality within the Flutter framework.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-8 px-6 md:px-0">
              <div className="bg-mainFirst flex rounded shadow-lg">
                <div className="w-48 h-full overflow-hidden">
                  <img
                    src="/whatsapp.jpg"
                    className="w-full hh-full object-cover transition hover:scale-110 rounded"
                    alt=""
                  />
                </div>
                <div className="pt-2 px-4 flex flex-col  justify-items-start">
                  <p className="text-white text-lg py-2">
                    WhatsApp UI Clone - Flutter
                  </p>
                  <p className="w-60 text-sm line-clamp-3">
                    Developed a WhatsApp UI clone using Flutter, demonstrating
                    my expertise in mobile app design and development. The
                    project faithfully replicates the intuitive and
                    user-friendly interface of the original WhatsApp
                    application.
                  </p>
                </div>
              </div>
              <div className="bg-mainFirst flex rounded shadow-lg ">
                <div className="w-48 h-full overflow-hidden">
                  <img
                    src="/book.jpg"
                    className="w-full h-full object-cover transition hover:scale-110 rounded"
                    alt=""
                  />
                </div>
                <div className="pt-2 px-4 flex flex-col  justify-items-start    ">
                  <p className="text-white text-lg py-2">
                    Book Reading App - Flutter
                  </p>
                  <p className="w-60 text-sm line-clamp-3">
                    Crafted an immersive Book Reading App using Flutter. Enjoy a
                    user-friendly interface, extensive library access,
                    customizable reading settings, and offline reading.
                    Bookmark, highlight, and track your progress seamlessly.
                    Share your favorite reads and discover new ones. This
                    project showcases my proficiency in mobile app development,
                    UI/UX design, and creating engaging user experiences.
                  </p>
                </div>
              </div>
              <div className="bg-mainFirst flex rounded shadow-lg">
                <div className="w-48 h-full overflow-hidden">
                  <img
                    src="/news.jpg"
                    className="w-full h-full object-cover transition hover:scale-110 rounded"
                    alt=""
                  />
                </div>
                <div className="pt-2 px-4 flex flex-col  justify-items-start">
                  <p className="text-white text-lg py-2">
                    WhatsApp UI Clone - Flutter
                  </p>
                  <p className="w-60 text-sm line-clamp-3">
                    Developed a WhatsApp UI clone using Flutter, demonstrating
                    my expertise in mobile app design and development. The
                    project faithfully replicates the intuitive and
                    user-friendly interface of the original WhatsApp
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
