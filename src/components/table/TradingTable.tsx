/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";

type TabOption = "Normal" | "Swap Free";
type StepOption = "2 Step" | "1 Step";
type TimeOption = "GOAT" | "NO TIME LIMIT" | "SWING";
type TraderOption = "MATCHTRADER" | "TRADELOCKER";
type AmountOption =
  | "5K"
  | "8K"
  | "15K"
  | "25K"
  | "50K"
  | "100k"
  | "150K"
  | "200K";

interface TableRow {
  param: string;
  step1: string;
  step2: string;
  goat: string;
}

interface TableData {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        [key: string]: TableRow[];
      };
    };
  };
}

const TradingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabOption>("Normal");
  const [activeStep, setActiveStep] = useState<StepOption>("2 Step");
  const [activeTime, setActiveTime] = useState<TimeOption>("GOAT");
  const [activeTrader, setActiveTrader] = useState<TraderOption>("MATCHTRADER");
  const [activeAmount, setActiveAmount] = useState<AmountOption>("5K");

  const mockTableData: TableData = {
    Normal: {
      "2 Step": {
        GOAT: {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
        "NO TIME LIMIT": {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
        SWING: {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
      },
      "1 Step": {
        "NO TIME LIMIT": {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
        SWING: {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
      },
    },
    "Swap Free": {
      "2 Step": {
        GOAT: {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
        "NO TIME LIMIT": {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
        SWING: {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
      },
      "1 Step": {
        "NO TIME LIMIT": {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
        SWING: {
          MATCHTRADER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
          TRADELOCKER: [
            { param: "Target", step1: "10%", step2: "5%", goat: "N/A" },
            {
              param: "Minimum Trading Days",
              step1: "0",
              step2: "0",
              goat: "1st payout on demand",
            },
            { param: "Daily Drawdown", step1: "5%", step2: "5%", goat: "5%" },
            {
              param: "Maximum Drawdown",
              step1: "10%",
              step2: "10%",
              goat: "10%",
            },
            {
              param: "Trading Period",
              step1: "No Time Limit",
              step2: "No Time Limit",
              goat: "No Time Limit",
            },
            {
              param: "Leverage",
              step1: "Up to 1:100",
              step2: "Up to 1:100",
              goat: "Up to 1:100",
            },
            {
              param: "Profit Split",
              step1: "N/A",
              step2: "N/A",
              goat: "Up to 95%",
            },
          ],
        },
      },
    },
  };

  const challengePrices: Record<AmountOption, number> = {
    "5K": 30,
    "8K": 48,
    "15K": 88,
    "25K": 138,
    "50K": 238,
    "100k": 398,
    "150K": 598,
    "200K": 989,
  };

  const renderTabs = <T extends string>(
    options: T[],
    activeOption: T,
    setActive: (option: T) => void,
  ) => (
    <div className="mb-3 flex flex-wrap rounded-2xl bg-bg">
      {options.map((option) => (
        <button
          key={option}
          className={`rounded-full px-7 py-2 text-xs font-semibold ${
            activeOption === option
              ? "bg-gradient-gr5 text-title"
              : "text-title"
          }`}
          onClick={() => setActive(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );

  const tableData = useMemo(() => {
    return (
      mockTableData[activeTab]?.[activeStep]?.[activeTime]?.[activeTrader] || []
    );
  }, [activeTab, activeStep, activeTime, activeTrader]);

  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-6 pb-4 text-white">
      {renderTabs(
        ["Normal", "Swap Free"] as TabOption[],
        activeTab,
        setActiveTab,
      )}
      {renderTabs(
        ["2 Step", "1 Step"] as StepOption[],
        activeStep,
        setActiveStep,
      )}
      {renderTabs(
        ["GOAT", "NO TIME LIMIT", "SWING"] as TimeOption[],
        activeTime,
        setActiveTime,
      )}
      {renderTabs(
        ["MATCHTRADER", "TRADELOCKER"] as TraderOption[],
        activeTrader,
        setActiveTrader,
      )}
      {renderTabs(
        [
          "5K",
          "8K",
          "15K",
          "25K",
          "50K",
          "100k",
          "150K",
          "200K",
        ] as AmountOption[],
        activeAmount,
        setActiveAmount,
      )}

      <table className="mt-4 w-full bg-bgCard">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left">Step 1</th>
            <th className="px-4 py-2 text-left">Step 2</th>
            <th className="px-4 py-2 text-left">Goat Account</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{row.param}</td>
              <td className="px-4 py-2">{row.step1}</td>
              <td className="px-4 py-2">{row.step2}</td>
              <td className="px-4 py-2">{row.goat}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex w-full items-center justify-between rounded-3xl bg-bgCard p-2 pl-6">
        <div className="flex items-center justify-center gap-1 text-2xl font-bold">
          <p className="bg-gradient-gr5 bg-clip-text text-5xl text-transparent">
            ${challengePrices[activeAmount]}
          </p>{" "}
          - <p className="text-xl font-light">{activeAmount} Challenge</p>
        </div>
        <button className="rounded-3xl bg-gradient-gr5 p-8 text-lg text-bg">
          START CHALLENGE
        </button>
      </div>
    </div>
  );
};

export default TradingTable;
