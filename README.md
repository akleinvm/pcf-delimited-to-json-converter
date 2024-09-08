# PCF CSV to JSON Converter

## Overview

The **PCF CSV to JSON Converter** is a PowerApps Component Framework (PCF) control that allows users to upload a comma-separated values (CSV) file and converts it into a `.txt` file in JSON format. This solution is particularly useful for transforming data from CSV format to a more flexible and readable JSON structure.

## Features

- Upload CSV files via a custom PCF control.
- Converts CSV data to JSON format.
- Exports the converted JSON data as a `.txt` file.
- Easy to integrate into model-driven apps in PowerApps.

## Prerequisites

- PowerApps environment.
- [PowerApps CLI](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/implementing-controls-using-typescript) installed for building and deploying PCF components.
- Basic understanding of PowerApps Component Framework (PCF) development.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/pcf-csv-to-json-converter.git
    cd pcf-csv-to-json-converter
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

1. Add the PCF CSV to JSON Converter component to your PowerApps form or canvas app.
2. Upload a CSV file using the control.
3. The control will convert the CSV data into a JSON object.
4. Download the `.txt` file containing the JSON data.

## Example

A CSV file like this:
```csv
name,age,city
John Doe,28,New York
Jane Smith,34,Los Angeles
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
