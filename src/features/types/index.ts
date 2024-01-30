export type optionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type forecastType = {
  name: string;
  country: string;
  list: ListProps[];
  sunrise: number;
  sunset: number;
};

type ListProps = { 

    name: string;
    dt: number;
    main: MainProps;
    weather: WeatherProps;

    wind: WindProps;
    clouds: {
      all: number;
    };
    pop: number;
    visibility: number;
};

type MainProps = {    
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type WeatherProps = {
  
    main: string;
    icon: string;
    description: string;
  
};

type WindProps = {
  speed: number;
  gust: number;
  deg: number;
}






const mainMocking: MainProps = {
    temp: 25,
    pressure: 1,
    temp_max: 30,
    temp_min: 20,
    feels_like: 26,
    humidity: 50,
}

const weatherMocking: WeatherProps =  {
  main: 'Clear',
  description: 'Clear sky',
  icon: '01d',
}

const windMocking: WindProps = {
  deg: 180,
  speed: 5,
  gust: 0,
}

const listMocking: ListProps = {
  dt: 1644168000,
  main: mainMocking,
  weather: weatherMocking,
  wind: windMocking,


  visibility: 10,
  pop: 20,
  name: "",
  clouds: {
    all: 0
  }
}


export const mockData = {
  name: 'CityName',
  country: 'US',


  list: [ listMocking ],
  sunrise: 0,
  sunset: 0
};




// Generated by https://quicktype.io
// Generated by https://quicktype.io
// Generated by https://quicktype.io

export interface ForecastRespone {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt: number;
  main: MainClass;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
}

export interface Clouds {
  all: number;
}

export interface MainClass {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Rain {
  "3h": number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export interface Weather {
  id: number;
  main: MainEnum;
  description: Description;
  icon: string;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  LightRain = "light rain",
  OvercastClouds = "overcast clouds",
  ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}