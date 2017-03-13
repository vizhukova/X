import React from 'react';
import FilesAction from '../actions/FilesAction';

class ImageLoader extends React.Component {

    constructor(){
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
        if(this.state.onChange) {
            this.state.onChange(this.state.files);
        }
    }

    deleteImage(indexToDel) {
        this.state.files = this.state.files.filter((item, index) => index != indexToDel);
        this.onChange();
    }

    uploadFiles(input) {

        return new Promise((resolve, reject) => {
            if(input.files && input.files.length) {

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

    render(){

        var addImg = (photo, index) => {
            return <span className="img-container" onClick={() => this.deleteImage(index)} key={index}>
                        <img src={photo.path} alt=""/>
                        <div className="file-background"></div>
                    </span>
        };

        return <div className="image-loader">
            {this.state.files.length
                ? <div>
                    {this.state.files.map((photo, index) => {
                        return addImg(photo, index);
                    })}

                    {this.state.isMultiple
                        ? <button className="btn btn-plus btn-default">
                            <i className="glyphicon glyphicon-plus" />
                            <input type="file" multiple={this.state.isMultiple} onChange={this.onImagesAdditionalLoad}/>
                          </button>
                        : null
                    }

                  </div>
                : <button className="btn btn-default">
                    <i className="glyphicon glyphicon-camera" />
                    <input type="file" multiple={this.state.isMultiple} onChange={this.onImagesLoad}/>
                 </button>
            }

        </div>


    }


}


export default ImageLoader;