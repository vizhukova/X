import React from 'react';
import FilesAction from '../actions/FilesAction';

class FileLoader extends React.Component {

    constructor() {
        super();
        this.state = {
            isMultiple: false,
            files: []
        };

        this.onImagesLoad = this.onImagesLoad.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.onImagesAdditionalLoad = this.onImagesAdditionalLoad.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    componentDidMount() {
        this.setState(this.props);
    }

    componentWillReceiveProps(props) {
        this.setState(props);
    }

    onChange() {
        if (this.state.onChange) {
            this.state.onChange(this.state.files);
        }
    }

    deleteImage(indexToDel) {
        this.state.files = this.state.files.filter((item, index) => index != indexToDel);
        this.onChange();
    }

    uploadFiles(input) {

        return new Promise((resolve, reject) => {
            if (input.files && input.files.length) {

                var formData = new FormData();
                for (var i = 0; i < input.files.length; i++) {
                    formData.append(`userPhoto`, input.files[i]);
                }

                FilesAction.add(formData).then((data) => {
                    resolve(data.files);
                }).catch(err => {
                    reject(err);
                });
            } else {
                reject();
            }
        })

    }

    onImagesLoad(event) {
        var input = event.target;
        this.uploadFiles(input).then((files) => {
            this.state.files = files;
            this.onChange();
        })
    }

    onImagesAdditionalLoad(event) {
        var input = event.target;
        this.uploadFiles(input).then((files) => {
            this.state.files = this.state.files.concat(files);
            this.onChange();
        })
    }

    render() {

        var addFile = (file, index) => {
            var fileNameArr = file.path.split('/');
            var fileName =fileNameArr[fileNameArr.length - 1];

            return <span className="doc-container" onClick={() => this.deleteImage(index)} key={index}>
                <span className="document" data-doc={fileName}>
                    <i className="glyphicon glyphicon-align-justify"/>
                </span>
                        <div className="file-background"></div>
                    </span>
        };

        return <div className="image-loader">
            {this.state.files.length
                ? <div>
                    {this.state.files.map((file, index) => {
                        return addFile(file, index);
                    })}

                    {this.state.isMultiple
                        ? <div className="btn btn-plus btn-default">
                            <i className="glyphicon glyphicon-plus"/>
                            <input type="file" multiple={this.state.isMultiple} onChange={this.onImagesAdditionalLoad}/>
                        </div>
                        : null
                    }

                </div>
                : <div className="btn btn-default">
                    <i className="glyphicon glyphicon-file"/>
                    <input type="file" multiple={this.state.isMultiple} onChange={this.onImagesLoad}/>
                </div>
            }

        </div>


    }


}


export default FileLoader;