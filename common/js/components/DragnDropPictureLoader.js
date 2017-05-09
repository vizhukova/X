import React from 'react';
var dragDrop = require('drag-drop')
import FilesAction from '../actions/FilesAction';

class DragnDropPictureLoader extends React.Component {

    constructor() {
        super();
        this.state = {
            files: []
        };

        this.onImagesLoad = this.onImagesLoad.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.onImagesAdditionalLoad = this.onImagesAdditionalLoad.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    componentDidMount() {
        this.removeDragNDrop = dragDrop(this.dragNDropRef,
            (files, pos) => this.onImagesAdditionalLoad({target: {files}}));
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

    deleteImage(e, indexToDel) {
        e.stopPropagation();
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

    componentWillUnmount() {
        this.removeDragNDrop();
    }

    render() {

        var addImg = (photo, index) => {
            return <span className="img-container" onClick={(e) => this.deleteImage(e, index)} key={index}>
                        <img src={photo.path} alt=""/>
                        <div className="file-background"></div>
                    </span>
        };

        return <div className="drag-n-drop-container"
                    ref={ref => this.dragNDropRef = ref}>
            {this.state.files.length
                ? <div>
                    {this.state.files.map((photo, index) => {
                        return addImg(photo, index);
                    })}
                    <button className="add-more">
                        <span>+</span>
                    </button>
                </div>
                : <span className="title">
                    Загрузить файлы
                     <input type="file" multiple
                            onChange={this.onImagesAdditionalLoad}/>
                  </span>
            }

        </div>


    }


}


export default DragnDropPictureLoader;