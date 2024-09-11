# Precision Weather Intelligence

**Precision Weather Intelligence** is a weather forecasting application built with Next.js, Tailwind CSS, and Shadcn UI. It leverages the OpenWeatherMap API to provide users with detailed and up-to-date weather information, including temperature, air pollution, sunset times, and more. The application features a single-page UI designed to be visually appealing and highly functional.

## Features

- **Current Weather Information:** Displays temperature, air pollution levels, wind speed, cloudiness, UV index, humidity, visibility, and pressure.
- **Detailed Forecasting:** Shows previous weather forecasts, recent 5-day forecast, and "feels like" temperature.
- **Geolocation:** Provides latitude and longitude of the selected city and displays it on a map.
- **City Search:** Allows users to search and switch between different cities.
- **Top Cities:** Displays information about the top largest cities.
- **Responsive Design:** Fully responsive and designed using Tailwind CSS and Shadcn UI for a clean and modern look.

## Tech Stack

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Shadcn UI:** A component library based on Tailwind CSS for consistent and attractive design.
- **OpenWeatherMap API:** Provides weather data including temperature, air pollution, and more.

![Screenshot from 2024-09-11 08-48-19](https://github.com/user-attachments/assets/787b2470-d940-4856-9bb1-9b18765f84f2)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/precision-weather-intelligence.git
   ```

2. **Navigate to the Project Directory:**

```bash
   cd precision-weather-intelligence
   ```

3. **Install Dependencies:**
   ### Create a `.env` File:

1. Add your OpenWeatherMap API key to `.env`:

 ```bash
   npm install
   ```
4. **Env Variable:**
    ```bash
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```
5. **Run the Development Server:**
    ```bash
    npm run dev
   ```
6. **Open Your Browser:**
  - Go to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage
  - **Search for a City:** Enter the name of a city in the search bar to view its weather information.
  - **View Current Weather:** See details such as temperature, humidity, and air pollution for the selected city.
  - **Forecast Information:** Access current and 5-day weather forecasts.
` - **Map Integration:** View the selected city on the integrated map.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

