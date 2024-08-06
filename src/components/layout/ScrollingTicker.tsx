import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

interface TickerItem {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const ScrollingTicker: React.FC = () => {
  const [items, setItems] = useState<TickerItem[]>([]);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch data from CoinGecko API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          },
        );
        interface CoinData {
          id: string;
          image: string;
          name: string;
          current_price: number;
          price_change_percentage_24h: number;
        }

        const data = response.data.map((coin: CoinData) => ({
          id: coin.id,
          image: coin.image,
          name: coin.name,
          current_price: coin.current_price,
          price_change_percentage_24h: coin.price_change_percentage_24h,
        }));
        setItems(data);
      } catch (error) {
        console.error("Error fetching ticker items:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (ticker) {
      const handleMouseEnter = () => {
        ticker.style.animationPlayState = "paused";
      };
      const handleMouseLeave = () => {
        ticker.style.animationPlayState = "running";
      };

      ticker.addEventListener("mouseenter", handleMouseEnter);
      ticker.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        ticker.removeEventListener("mouseenter", handleMouseEnter);
        ticker.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="relative z-10 mb-8 overflow-hidden whitespace-nowrap">
      <div
        ref={tickerRef}
        className="animate-marquee inline-block"
        style={{ display: "inline-flex" }}
      >
        {items.map((item, index) => (
          <div key={index} className="mx-4 flex items-center px-6">
            <img src={item.image} alt={item.name} className="mr-4 h-10 w-10" />
            <div className="flex items-center gap-4 text-white">
              <p className="text-lg">{item.name}</p>
              <p>${item.current_price.toFixed(2)}</p>
              <p
                className={`text-sm ${
                  item.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + items.length}
            className="mx-4 flex items-center px-6"
          >
            <img src={item.image} alt={item.name} className="mr-4 h-10 w-10" />
            <div className="flex items-center gap-4 text-white">
              <p className="text-lg">{item.name}</p>
              <p>${item.current_price.toFixed(2)}</p>
              <p
                className={`text-sm ${
                  item.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTicker;
