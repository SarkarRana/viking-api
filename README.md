

# VikingAPI 🚀

A Fast and Powerful Desktop API Testing Tool
VikingAPI is a sleek, efficient, and powerful desktop application built using Tauri with ReactJS for the frontend. It is designed for developers and testers to streamline API testing, just like Postman, but with a faster, lighter, and more native feel. Whether you’re working with REST APIs or just testing out some backend services, VikingAPI makes it easier to craft requests, visualize responses, and measure performance in real-time.

## Features 🔥

- Cross-Platform: VikingAPI runs on Windows, macOS, and Linux.
- Blazing Fast: Tauri’s lightweight architecture ensures the app uses minimal resources while offering a smooth user experience.
 - API Requests & Responses: Make HTTP requests, view detailed responses, and monitor headers, body, and status codes.
- Query Parameter Input: Easy-to-use interface for adding and managing query parameters.
- Performance Monitoring: Measure and display API call durations, letting users analyze response time and performance.
- Custom Headers: Add and manage custom headers for each request.
Save & Reuse Requests: Save your commonly used requests and load them whenever you need.
- Light & Dark Themes: Switch between light and dark themes for a more comfortable user experience.
- Beautiful UI: Built with ReactJS and styled using Chakra UI and React Icons for a modern, intuitive design.
- Security: Designed with security in mind using Tauri’s security-first architecture.
Efficient Memory Usage: VikingAPI uses Rust's performance and low memory footprint.

## Technologies Used 🛠️

#### Core Technologies:
- Tauri: Native-like desktop app framework using Rust, with extremely low resource consumption.
- ReactJS: Powerful JavaScript library for building responsive and interactive user interfaces.
- Chakra UI: A simple, modular, and accessible component library for React, used to style the VikingAPI UI.
- Recoil: State management library used for efficiently handling global state across the app.
- Axios: Promise-based HTTP client used to make API requests.
- Chakra Icons: Library of icons used for enhanced UI and user experience.

### # Why Tauri?
Tauri is a modern alternative to Electron that provides a smaller app size, faster performance, and better security. It allows VikingAPI to be lightweight and efficient, while React takes care of the UI/UX.

## How to Run VikingAPI Locally 🖥️

### Prerequisites:
- Node.js installed (version 14.x or higher recommended)
- Rust installed (required by Tauri)
- Yarn or npm (Yarn is preferred for better dependency management)

### Installation Steps:
- Clone this repository:
- Copy code
```bash
git clone https://github.com/your-username/vikingapi.git
cd vikingapi
```
- Install the dependencies:

``` bash
npm install
```
- Install Tauri CLI (if you haven't already):

``` bash
cargo install tauri-cli
```
- Run the app:

``` bash
npm start tauri dev
```
This will start the development server for React and open the Tauri app window.

## Usage 🚀

Enter the API endpoint in the URL input box.
Add headers, query parameters, and request bodies as required.
Click Send Request to make the API call.
View the response, including the status code, headers, and body.
Save frequently used requests to reuse later.
Monitor the time taken for each API request to help in performance tuning.

## Screenshots 📸

Light Theme:

Dark Theme:

## Future Enhancements 🚀

- OAuth2 Authentication Support: Easily test APIs that require OAuth2 authentication.
- GraphQL Support: Add support for GraphQL APIs.
- Collection of Requests: Organize requests into collections for different projects.
- Environment Variables: Set environment variables for different API environments (dev, prod, etc.).

## Why VikingAPI? 🌟

VikingAPI stands out due to its lightweight nature, fast performance, and modern UI. It's designed with both simplicity and power in mind, offering everything you need in an API testing tool without the bloat. If you're tired of heavy, slow API testing tools, VikingAPI is your perfect alternative.

## Contributing 🤝

Contributions are welcome! Feel free to submit a pull request or open an issue if you find bugs or have suggestions for new features.

Steps to Contribute:
Fork the repository.
Create your feature branch:
``` bash
git checkout -b feature/YourFeature
````
Commit your changes:
``` bash
git commit -m "Add Your Feature"
```
Push to the branch:
``` bash
git push origin feature/YourFeature
```
Open a Pull Request.

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
