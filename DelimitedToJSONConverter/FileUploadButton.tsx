import * as React from 'react';
import {PrimaryButton} from '@fluentui/react';

export interface IFileUploadButtonProps {
  label?: string;
  onUpload?: (file: File) => void;
}

export class FileUploadButton extends React.Component<IFileUploadButtonProps> {
  

  private fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  private handleClick = () => {
    this.fileInputRef.current?.click();
  };
  
  private handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && this.props.onUpload) {
      this.props.onUpload(file);
    }
  };

  public render(): React.ReactNode {
    return (
      <div>
        <PrimaryButton onClick={this.handleClick}>
          {this.props.label || 'Upload File'}
        </PrimaryButton>
        <input
          type='file'
          ref={this.fileInputRef}
          style={{display: 'none'}}
          accept='.txt,.csv,.tsv'
          onChange={this.handleFileChange}
        />
      </div>
    );
  }
}