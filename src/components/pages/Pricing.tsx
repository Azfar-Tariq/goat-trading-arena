import React from "react";
import TableSection from "../layout/TableSection";
import CompetitionSection from "../layout/CompetitionSection";
import ChooseUsSection from "../layout/ChooseUsSection";

// const VideoBackground: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   return (
//     <div className="relative">
//       <div className="absolute inset-0 overflow-hidden">
//         <video
//           className="h-full w-full object-cover blur-xl"
//           poster="https://goatfundedtrader.com/wp-content/uploads/2024/05/Goat-Funded-Trader-pricing-video-cover-1.jpg"
//           preload="auto"
//           muted
//           autoPlay
//           loop
//           playsInline
//         >
//           <source
//             src="https://goatfundedtrader.com/wp-content/uploads/2024/05/Goat-Funded-Trader-pricing-video.mp4"
//             type="video/mp4"
//           />
//         </video>
//       </div>
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

const Pricing: React.FC = () => {
  return (
    <>
      {/* <VideoBackground> */}
      <TableSection />
      {/* </VideoBackground> */}
      <ChooseUsSection />
      <CompetitionSection />
    </>
  );
};

export default Pricing;
