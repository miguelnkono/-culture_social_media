
export default class ImageType {
    #imagePath
    #imageName

    constructor(imagePath, imageName) {
        this.#imagePath = imagePath
        this.#imageName = imageName
    }

    get image() {
        return { imagePath: this.#imagePath, imageName: this.#imageName }
    }
}