

export class Blog{
    id?: number;
    title: string;
    text: string;
    images : File;


    constructor(title:string, text:string, images:File){
        this.title = title;
        this.text = text;
        this.images = images;
    }

    getId() {
        return this.id;
    }

    setId(id:number) {
        this.id = id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title:string) {
        this.title = title;
    }

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    getImages(){
        return this.images;
    }

    setImages(images:File){
        this.images = images;
    }
}