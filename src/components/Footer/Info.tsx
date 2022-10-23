import { InfoDetails } from "../../interfaces/Interfaces";

export const Info = () => {
  return (
    <div className="flex flex-col px-10 py-10 lg:self-center lg:gap-32 lg:px-32 lg:flex-row ">
      {InfoDetails.map((info, index) => {
        return (
          <div
            key={index}
            className="flex flex-col self-start justify-start h-full gap-5"
          >
            <p>{info.title}</p>
            <div className="flex-col hidden gap-1 lg:flex">
              {info.details.map((keyword, index) => (
                <p className="cursor-pointer hover:underline" key={index}>
                  {keyword}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
