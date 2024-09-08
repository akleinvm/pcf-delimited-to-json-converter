import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { FileUploadButton, IFileUploadButtonProps } from "./FileUploadButton";
import * as React from "react";
import * as Papa from 'papaparse';

export class DelimitedToJSONConverter implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private jsonOutput: string;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        return (
            React.createElement(
                FileUploadButton, 
                {
                    label: context.parameters.label.raw ?? '', 
                    onUpload: this.parseFile
                }
            )
        )
    }

    public getOutputs(): IOutputs {
        return {
            jsonString: this.jsonOutput
        };
    }

    public destroy(): void {

    }

    private parseFile(file: File) {
        Papa.parse(file, {
            header: true,
            encoding: 'UTF-8',
            complete: (results) => {
                console.log(results.data);
                this.jsonOutput = results.data.toString();
            },
            error: (error) => {
                console.error('Error:', error.message);
            }
        });
        this.notifyOutputChanged()
    }
}
