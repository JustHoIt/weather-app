import { GetStaticProps } from "next";
import { ComponentProps, FC } from "react";
import { Weather } from "@/api/weather";
import { WeatherMain } from "@/domains/weather/indext";

interface Props extends ComponentProps<typeof WeatherMain> {}

export const getStaticProps: GetStaticProps<Props> = async () => {

  const weather_instance = new Weather(60, 126);

  const result = await weather_instance.fetchVeryShortTermWeatherForecast();
  console.log(result);

  return {
    props: {},
  };
};

const WeatherPage: FC<Props> = (props) => {
  return <WeatherMain {...props} />;
}

export default WeatherPage;