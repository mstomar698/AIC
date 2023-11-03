import React from 'react';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';
const RoadMap: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="hori-timeline" dir="ltr">
                <ul className="list-inline events">
                  <li className="list-inline-item event-list translate-y-14 translate-x-[7.5rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max-sm:text-sm font-bold">
                        Introduction to the Future
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        Get to know the latest technology and innovations 
                        in the field of AI through interactive 
                        workshops and hackathons
                      </p>
                    </div>
                    <TbTriangleFilled className="border-b-4 border-black border-solid text-5xl -translate-y-[11rem] translate-x-32" />
                  </li>
                  <li className="list-inline-item event-list -translate-y-56 translate-x-[1.8rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max-sm::text-sm font-bold">
                        Practical Learning experience
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        Learn to build amazing real-world solutions through 
                        the Institute level projects with your mentor institute
                      </p>
                    </div>
                    <TbTriangleInvertedFilled className="text-5xl border-t-4 border-black border-solid translate-x-28" />
                  </li>
                  <li className="list-inline-item event-list translate-y-14 -translate-x-[5.3rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max-sm::text-sm font-bold">
                        Explore the sea of AI
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        Relish the taste of AI buffet as we journey through the fields of AI in Imagery, Audio, Natural Language and much more
                      </p>
                    </div>
                    <TbTriangleFilled className="border-b-4 border-black border-solid text-5xl -translate-y-[11rem] translate-x-32" />
                  </li>
                  <li className="list-inline-item event-list -translate-y-56 -translate-x-[11rem]">
                    <div className="px-4 border-2 border-black border-solid rounded-[20px] p-2">
                      <h5 className="lg:text-xl max-lg:text-lg max-sm::text-sm font-bold">
                        Be part of the community
                      </h5>
                      <p className="text-muted leading-5 text-[15px]">
                        Become a part of the community to enhance the learning 
                        experience. Brightest of brains all at one place!
                      </p>
                    </div>
                    <TbTriangleInvertedFilled className="text-5xl border-t-4 border-black border-solid translate-x-32" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;



                      
                      