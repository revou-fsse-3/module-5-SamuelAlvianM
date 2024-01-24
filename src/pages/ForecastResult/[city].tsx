import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { forecastType, ForecastRespone } from "@features/types";
import ForecastDisplay from "@components/Layout/Forecast";

interface CityProps {
  forecast: forecastType;
}
export const getServerSideProps: GetServerSideProps<CityProps> = async (
  context
) => {
  const cityLat = (context.query!["lat"] as string) ?? "";
  const cityLon = (context.query!["lon"] as string) ?? "";
  try {
    const fetchForecast = await getForecast(cityLat, cityLon);
    return {
      props: {
        forecast: fetchForecast,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw Error("failed to fetch all data");
  }
};
type CityComponent = InferGetServerSidePropsType<typeof getServerSideProps>;
const City: NextPage<CityComponent> = ({ forecast }) => {
  return (
    <div>
      <ForecastDisplay data={forecast} />
    </div>
  );
};
export default City;
const BASE_URL = "http://api.openweathermap.org";
//http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=en
const getForecast = async (lat: string, lon: string) => {
  const request = await fetch(
    `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${
      process.env.REACT_APP_API_KEY ?? "2e9df2303f438519ec47c47706266d11"
    }`
  );

  if (!request.ok) {
    throw Error("failed to fetch");
  }
  const response = (await request.json()) as unknown;

  //   const forecastData = {
  //     ...response
  //     cityNae: request.
  //   };

  return response as forecastType;
};
