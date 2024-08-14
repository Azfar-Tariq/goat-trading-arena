import React from "react";

const CompetitionSection: React.FC = () => {
  const competitors = [
    { name: "GOAT FUNDED TRADER", color: "bg-colorGR5", isLogo: true },
    { name: "FTMO" },
    { name: "MYFUNDEDFX" },
    { name: "TOP TIER" },
    { name: "E8" },
    { name: "FUNDEDNEXT" },
  ];

  const metrics = [
    { name: "Profit Target", values: ["8%", "8%", "8%", "10%", "8%", "8%"] },
    { name: "Min Trading Days", values: ["0", "4", "1", "4", "0", "0"] },
    { name: "Max Loss", values: ["10%", "10%", "8%", "10%", "8%", "10%"] },
    { name: "Fidelity Program", values: ["Yes", "No", "No", "No", "No", "No"] },
    {
      name: "First Payout",
      values: [
        "On Demand",
        "14 days",
        "14 days",
        "14 days",
        "14 days",
        "28 days",
      ],
    },
    {
      name: "Profit Split",
      values: ["Up To 95%", "80%", "80%", "80%", "80%", "Up To 90%"],
    },
    {
      name: "100K Challenge",
      values: ["$398", "540$", "500$", "560$", "588$", "519$"],
    },
  ];

  return (
    <section className="relative z-10 mx-8 my-16 flex min-h-screen flex-col items-center justify-center lg:mx-40">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg text-accent lg:text-2xl">Just look at the</p>
        <p className="bg-custom-gradient bg-clip-text text-4xl text-transparent lg:text-6xl">
          Competition
        </p>
      </div>
      <div className="mt-12 w-full">
        <div className="mt-12 w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-left"></th>
                {competitors.map((competitor, index) => (
                  <th
                    key={index}
                    className={`p-2 text-center text-xs font-light lg:text-sm ${competitor.color} ${index === 0 ? "rounded-t-2xl bg-colorGR5" : ""} text-accent`}
                  >
                    {competitor.isLogo ? (
                      <div className="flex h-16 items-center justify-center">
                        <img
                          src="https://goatfundedtrader.com/wp-content/uploads/2023/02/logo-white.png"
                          alt="GOAT Funded Trader"
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                    ) : (
                      competitor.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`text-white ${rowIndex % 2 === 0 ? "" : "bg-bg2"}`}
                >
                  <td className="p-4 text-sm">{metric.name}</td>
                  {metric.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className={`p-4 text-center text-sm ${
                        colIndex === 0
                          ? `bg-colorGR5 ${rowIndex === metrics.length - 1 ? "rounded-b-2xl" : ""}`
                          : ""
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
