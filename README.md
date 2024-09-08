# Delimited to JSON Converter

## Overview

The **Delimited to JSON Converter** is a PowerApps Component Framework (PCF) control built for canvas apps that allows users to upload any delimited file (such as CSV, TSV, pipe-delimited, etc.) and converts the data into JSON format. The JSON data is accessible via the component's output property, making it easy to integrate with other PowerApps logic.

This component uses the [PapaParse](https://www.papaparse.com/) library for efficient parsing of delimited files.

## Features

- Upload any delimited file (e.g., CSV, TSV, pipe-delimited).
- Auto-detects used delimiter.
- Converts delimited data to JSON format.
- Easy to integrate into PowerApps canvas apps.
- JSON output is accessible through the component’s output property.

## Prerequisites

- PowerApps environment.
- [PowerApps CLI](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/implementing-controls-using-typescript) installed for building and deploying PCF components.
- Basic understanding of PowerApps Component Framework (PCF) development.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/pcf-delimited-to-json-converter.git
    cd pcf-delimited-to-json-converter
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Build the project:

    ```bash
    npm run build
    ```

4. Deploy the PCF component to your PowerApps environment:

    ```bash
    pac pcf push --environment <environment-id>
    ```

## Usage

1. Add the **Delimited File to JSON Converter** component to your PowerApps canvas app.
2. Upload a delimited file using the control (default is comma, but can be changed).
3. Select the appropriate delimiter if necessary (e.g., comma `,`, tab `\t`, pipe `|`, etc.).
4. The control will convert the delimited data into a JSON string.
5. The JSON output will be available in the component's output property, which can be used for further data manipulation in your canvas app.

## Example

A pipe-delimited file like this:

```txt
name|age|city
John Doe|28|New York
Jane Smith|34|Los Angeles
```

Will be converted to JSON format like this:
```json
[
  {
    "name": "John Doe",
    "age": 28,
    "city": "New York"
  },
  {
    "name": "Jane Smith",
    "age": 34,
    "city": "Los Angeles"
  }
]
```

## Contributing
Feel free to submit pull requests or open issues for any bugs or feature requests. Contributions are welcome!

## License
This project is licensed under the MIT License.
